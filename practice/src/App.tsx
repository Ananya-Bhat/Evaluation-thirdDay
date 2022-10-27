import "./style.css";
import LandingPage from "./views/landingPage/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./views/registerPage/registerPage";
import DashBoard from "./views/dashBoard/dashBoard";

function App() {

  const auth = localStorage.getItem("Authorised");

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/dashboard" element={auth === 'true' ? <DashBoard /> : <LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
