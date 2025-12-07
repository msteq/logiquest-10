import { HashRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './features/quiz/pages/LandingPage/LandingPage'
import NotFoundPage from './app/pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
