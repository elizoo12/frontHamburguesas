import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
const Router = () => (
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Layout>
  </BrowserRouter>
);

export default Router;
