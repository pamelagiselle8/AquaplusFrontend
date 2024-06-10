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

export default function BarraNav({ modoEditar = false }) {
  return (
    <Navbar className="shadow-small">
      <NavbarBrand>
        <img id="logo" src="../../assets/LogoTextoHD.png" alt="Logo" />
      </NavbarBrand>

      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#hero-section">
            Sobre Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#Mision&Vision" aria-current="page">
            Misión y Visión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#Contactanos" color="foreground">
            Contáctanos
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <LoginModal modoEditar={modoEditar} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
