import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Users from "./pages/users/index";

export function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        {/* outras rotas podem ser adicionadas aqui */}
      </Routes>
    </Router>
  );
}
