import React from "react";
import ReactDOM from "react-dom/client";
import Inicio from "./Inicio.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

// Routing se implementa aqui :)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Inicio />
    </NextUIProvider>
  </React.StrictMode>
);
