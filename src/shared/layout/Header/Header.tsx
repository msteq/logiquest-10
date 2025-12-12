import { Link } from 'react-router-dom'
import { useTheme } from '../../theme/ThemeContext'
import styles from './Header.module.css'

function Header() {
  const { theme, toggleTheme } = useTheme()

  const isSoft = theme === 'dark-soft'
  const label = isSoft ? 'テーマ: ネイビー' : 'テーマ: ブラック'

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          LogiQuest 10
        </Link>
        <div className={styles.right}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-pressed={isSoft}
          >
            {label}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
