import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Spacer,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function BarraEdicion({ setSeccionActual }) {
  setSeccionActual(0);
  return (
    <nav class="navbar-edicion">
      <ul>
        <div className="texto">
          <h1 className="font-semibold text-lg">
            Módulo de edición de contenido
          </h1>
          <p className="font-light text-md">Vista previa de la página web</p>
        </div>
        <div className="botones-editar">
          <Button
            className="boton"
            as={Link}
            color="primary"
            href="/"
            variant="flat"
          >
            Descartar cambios
          </Button>
          <Button
            className="boton text-white"
            as={Link}
            color="primary"
            href="/"
            variant="solid"
          >
            Guardar cambios
          </Button>
        </div>
      </ul>
    </nav>
  );
}
