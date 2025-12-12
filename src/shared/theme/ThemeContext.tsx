import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from 'react'

export type Theme = 'dark-strong' | 'dark-soft'

type ThemeContextValue = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

// localStorage 用のアプリ固有キー（他アプリとの衝突を避ける）
const STORAGE_KEY = 'logiquest-10:theme'

function loadInitialTheme(): Theme {
  // SSR やテスト環境など window がないケースでは安全側のデフォルトにフォールバック
  if (typeof window === 'undefined') {
    return 'dark-strong'
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark-strong' || stored === 'dark-soft') {
      return stored
    }
  } catch {
    // localStorage へのアクセスが制限されている環境では、保存値は無視してデフォルトに戻す
  }

  return 'dark-strong'
}

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => loadInitialTheme())

  // 副作用（DOM の data-theme と localStorage への永続化）は theme の変更に紐づけてこの useEffect 1 箇所に集約する
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
    }

    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, theme)
      }
    } catch {
      // 永続化に失敗しても UI の動作は継続させる
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark-strong' ? 'dark-soft' : 'dark-strong'))
  }

  const value: ThemeContextValue = {
    theme,
    setTheme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// カスタムフックを同一ファイルから export したいので、この行だけルールを無効化
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    // Provider のラップ漏れにすぐ気付けるよう、開発時は明示的に例外を投げる
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
