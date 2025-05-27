import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing/MainPage';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import CreatePointPage from '../pages/CreatePoint/CreatePointPage';
import MyPointsPage from "../pages/MyPoints/MyPointsPage"
import PerfilPage from '../pages/Perfil/PerfilPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/criarpoint" element={<CreatePointPage />} />
        <Route path="/meuspoints" element={<MyPointsPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
    </Router>
  );
}
