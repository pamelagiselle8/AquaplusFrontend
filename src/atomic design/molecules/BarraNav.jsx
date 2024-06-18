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
import { Link as RouterLink } from "react-router-dom";
import LoginModal from "../molecules/LogInModal";

import Logo from "../../assets/LogoTextoHD.png";
import IconoMenu from "../../assets/open-menu.png";

export default function BarraNav({ seccionActual }) {
  function colorSeleccion(seccion) {
    return seccionActual === seccion
      ? "text-secondary font-medium"
      : "text-foreground font-regular";
  }

  return (
    <nav className="navbar">
      <div className="marca">
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="boton-colapsable"
              isIconOnly
              variant="flat"
              color="white"
              size="sm"
              startContent={<img src={IconoMenu} />}
            />
          </DropdownTrigger>
          <DropdownMenu
            variant="light"
            color="primary"
            className="text-default"
            aria-label="Link Actions"
          >
            <DropdownItem
              className={colorSeleccion("Inicio")}
              key="Inicio"
              href="#"
            >
              Inicio
            </DropdownItem>
            <DropdownItem
              className={colorSeleccion("Sobre-nosotros")}
              key="Sobre-nosotros"
              href="#Sobre-nosotros"
            >
              Sobre nosotros
            </DropdownItem>
            <DropdownItem
              className={colorSeleccion("Mision-y-vision")}
              key="Mision-y-vision"
              href="#Mision-y-vision"
            >
              Misión y visión
            </DropdownItem>
            <DropdownItem
              as={Link}
              className={colorSeleccion("Contactanos")}
              key="Contactanos"
              href="#Contactanos"
            >
              Contáctanos
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Link href="#">
          <img id="logo" src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <a className={colorSeleccion("Inicio")} href="#">
            Inicio
          </a>
        </li>
        <li>
          <a
            className={colorSeleccion("Sobre-nosotros")}
            href="#Sobre-nosotros"
          >
            Sobre nosotros
          </a>
        </li>
        <li>
          <a
            className={colorSeleccion("Mision-y-vision")}
            href="#Mision-y-vision"
          >
            Misión y visión
          </a>
        </li>
        <li>
          <a className={colorSeleccion("Contactanos")} href="#Contactanos">
            Contáctanos
          </a>
        </li>
      </ul>
      <div className="boton-login">
        <LoginModal />
      </div>
    </nav>
  );
}
