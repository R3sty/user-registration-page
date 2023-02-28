import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home";
import Login from "./pages/Login";
import { initializeApp } from "firebase/app"
import config from "./firebaseConfig";
import AuthRoute from "./components/Authroute";

initializeApp(config.firebaseConfig);

export interface Props { }

const App: React.FC<Props> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user-registration-page/" element={<AuthRoute><HomeScreen /></AuthRoute>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;