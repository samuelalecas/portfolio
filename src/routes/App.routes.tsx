import { Route, Routes } from "react-router-dom"
import Landing from "../pages/Landing"
import NotFoundPage from "../pages/NotFoundPage"
import Login from "../pages/Login"
import Register from '../pages/Register';
import WeatherApp from "../pages/WeatherApp";

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/weather-app" element={<WeatherApp/>} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}
