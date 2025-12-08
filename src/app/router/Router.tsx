import { HashRouter, Routes, Route } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import LandingPage from '../../features/quiz/pages/LandingPage/LandingPage'
import QuizPage from '../../features/quiz/pages/QuizPage/QuizPage'
import ResultPage from '../../features/quiz/pages/ResultPage/ResultPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default Router
