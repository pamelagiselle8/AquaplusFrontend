import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./atomicDesign/templates/Inicio.jsx";
import Login from "./atomicDesign/templates/Login.tsx";

import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cms" element={<Inicio modoEditar />} />
        </Routes>
      </Router>
    </NextUIProvider>
  </React.StrictMode>
);
