import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import AquaPlusLogo from "../atoms/AquaplusLogo.jsx";

export default function BarraNav() {
  return (
    <Navbar className="shadow-small">
      <NavbarBrand>
        <AquaPlusLogo />
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Sobre nosotros
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Misión y visión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contáctanos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="rounded-large shadow-small"
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Iniciar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
