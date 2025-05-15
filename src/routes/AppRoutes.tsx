import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing/MainPage';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
