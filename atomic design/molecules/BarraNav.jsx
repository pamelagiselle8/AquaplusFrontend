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

function colorSeleccion(seccionActual, seccion) {
  return seccionActual === seccion
    ? "text-secondary font-medium"
    : "text-foreground font-regular";
}

export default function BarraNav({ seccionActual }) {
  return (
    <nav class="navbar">
      <div className="marca">
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="boton-colapsable"
              isIconOnly
              variant="flat"
              color="white"
              size="sm"
              startContent={<img src="../../assets/open-menu.png" />}
            />
          </DropdownTrigger>
          <DropdownMenu
            variant="light"
            color="primary"
            className="text-default"
            aria-label="Link Actions"
          >
            <DropdownItem
              className={colorSeleccion(seccionActual, 0)}
              key="Inicio"
              href="#"
            >
              Inicio
            </DropdownItem>
            <DropdownItem
              className={colorSeleccion(seccionActual, 1)}
              key="Sobre-nosotros"
              href="#Sobre-nosotros"
            >
              Sobre nosotros
            </DropdownItem>
            <DropdownItem
              className={colorSeleccion(seccionActual, 2)}
              key="Mision-y-vision"
              href="#Mision-y-vision"
            >
              Misión y visión
            </DropdownItem>
            <DropdownItem
              className={colorSeleccion(seccionActual, 3)}
              key="Contactanos"
              href="#Contactanos"
            >
              Contáctanos
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Link href="#">
          <img id="logo" src="../../assets/LogoTextoHD.png" alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <a className={colorSeleccion(seccionActual, 0)} href="#">
            Inicio
          </a>
        </li>
        <li>
          <a
            className={colorSeleccion(seccionActual, 1)}
            href="#Sobre-nosotros"
          >
            Sobre nosotros
          </a>
        </li>
        <li>
          <a
            className={colorSeleccion(seccionActual, 2)}
            href="#Mision-y-vision"
          >
            Misión y visión
          </a>
        </li>
        <li>
          <a className={colorSeleccion(seccionActual, 3)} href="#Contactanos">
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
