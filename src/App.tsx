import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

export interface ApplicationProps { }

const App: React.FC<ApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <LoginPage />
      </Routes>
    </BrowserRouter>
  )
}

export default App
