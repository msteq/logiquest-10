import Router from './app/router/Router'
import { ThemeProvider } from './shared/theme/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App
