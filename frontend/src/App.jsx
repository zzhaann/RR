import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./components/navigation/Nav"
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import ResetPasswordPageConfirm from "./pages/ResetPasswordPageConfirm";
import ActivatePage from "./pages/ActivatePage";
import NotFoundPage from "./pages/NotFoundPage";
import TicTacToePage from "./pages/TicTacToePage.jsx";
import MemoryGamePage from "./pages/MemoryGamePage.jsx";
import PuzzlePage from "./pages/PuzzlePage.jsx";


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/activate/:uid/:token" element={<ActivatePage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/tic-tac-toe" element={<TicTacToePage />} />
          <Route path="/memory-game" element={<MemoryGamePage />} />
          <Route path="/puzzle-game" element={<PuzzlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App