import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import WeatherApp from "../pages/WeatherApp";
import { ProtectedRoute } from "./Protected.route";
import TicTacToe from "../pages/TicTacToe";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/portfolio" element={<Navigate to="/"/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
