import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./atomic design/templates/Inicio.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio modoEditar={true} />} />
          <Route path="/cms" element={<Inicio />} />
        </Routes>
      </Router>
    </NextUIProvider>
  </React.StrictMode>
);
