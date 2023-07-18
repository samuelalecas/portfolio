import { Route, Routes } from "react-router-dom"
import Landing from "../pages/Landing"
import NotFoundPage from "../pages/NotFoundPage"
import Login from "../pages/Login"
import Register from '../pages/Register';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}
