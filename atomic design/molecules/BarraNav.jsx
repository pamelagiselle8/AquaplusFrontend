import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import LoginModal from "../molecules/LogInModal"; // Adjust the path according to your file structure

export default function BarraNav({ seccionActual, modoEditar = false }) {
  return (
    <Navbar className="shadow-small">
      <NavbarBrand>
        <Link href="#">
          <img id="logo" src="../../assets/LogoTextoHD.png" alt="Logo" />
        </Link>
      </NavbarBrand>

      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="#Sobre-nosotros"
            color={seccionActual === 1 ? "primary" : "foreground"}
          >
            Sobre nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#Mision-y-vision"
            color={seccionActual === 2 ? "primary" : "foreground"}
          >
            Misión y visión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#Contactanos"
            color={seccionActual === 3 ? "primary" : "foreground"}
          >
            Contáctanos
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <LoginModal />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
