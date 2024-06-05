import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link ,
  Button,
} from "@nextui-org/react";
import {  Link as RouterLink } from "react-router-dom";

export default function BarraNav() {
  return (
    <Navbar className="shadow-small">
      <NavbarBrand>
        <img id="logo" src="../../assets/LogoTextoHD.png" />
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem href="hero-section">
          <Link color="foreground" href="#">
            Sobre nosotros
          </Link>
        </NavbarItem>
        <NavbarItem href="mision">
          <Link href="#" aria-current="page">
            Misión y visión
          </Link>
        </NavbarItem>
        <NavbarItem href="contactanos"> 
          <Link color="foreground">
            Contáctanos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <RouterLink to="/login">
            <Button
              className="rounded-large shadow-small"
              color="primary"
              variant="flat"
            >
              Iniciar sesión
            </Button>
          </RouterLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
