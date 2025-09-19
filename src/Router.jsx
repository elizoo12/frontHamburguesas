import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import ErrorPage from "./pages/ErrorPage";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/events" element={<Events />} /> 
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
