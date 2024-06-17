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
import { cargarContenido } from "../../services/contenido";

export default function BarraEdicion({
  contenido,
  setContenido,
  setSeccionActual,
}) {
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
            onPress={cargarContenido(setContenido)}
          >
            Descartar cambios
          </Button>
          <Button
            className="boton text-white"
            as={Link}
            color="primary"
            // href="/"
            variant="solid"
            onPress={() => {
              console.log("contenido ", contenido);
            }}
          >
            Guardar cambios
          </Button>
        </div>
      </ul>
    </nav>
  );
}
