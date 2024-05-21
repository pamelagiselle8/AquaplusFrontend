import React from "react";
import ReactDOM from "react-dom/client";
import Inicio from "../atomic design/templates/Inicio.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Inicio />
    </NextUIProvider>
  </React.StrictMode>
);
