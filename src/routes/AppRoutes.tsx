import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing/MainPage';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import CreatePointPage from '../pages/CreatePoint/CreatePointPage';
import MyPointsPage from "../pages/MyPoints/MyPointsPage"
import PerfilPage from '../pages/Perfil/PerfilPage';
import ProtectedRoute from "../components/ProtectedRoute"
import PointLocation from '../pages/CreatePoint/PointLocation'
import EditPoint from '../pages/EditPoint/EditPoint'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/criarpoint" element={<ProtectedRoute><CreatePointPage /></ProtectedRoute>} />
        <Route path="/meuspoints" element={<ProtectedRoute><MyPointsPage /></ProtectedRoute>} />
        <Route path="/perfil" element={<ProtectedRoute><PerfilPage /></ProtectedRoute>} />
        <Route path="/localpoint" element={<ProtectedRoute><PointLocation /></ProtectedRoute>} />
        <Route path="/editarpoint" element={<ProtectedRoute><EditPoint /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
