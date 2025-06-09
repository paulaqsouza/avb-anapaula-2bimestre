import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";
import Detalhes from "../pages/Detalhes";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/detalhes/:name" element={<Detalhes />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;


