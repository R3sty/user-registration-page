import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import HomeScreen from "./pages/Home"

export interface AppProps { }

const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/user-registration-page/login" element={<LoginPage />} />
        <Route path="/user-registration-page/home" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
