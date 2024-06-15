import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import LoginModal from "../molecules/LogInModal";

export default function BarraNav({ seccionActual }) {
  if (window.screen.width <= 600) {
  }
  return (
    <nav class="navbar">
      <Link href="#">
        <img id="logo" src="../../assets/LogoTextoHD.png" alt="Logo" />
      </Link>
      <ul>
        <li>
          <a
            className={
              "text-md " +
              (seccionActual === 0
                ? "text-primary font-medium"
                : "text-foreground")
            }
            href="#"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            className={
              "text-md " +
              (seccionActual === 1
                ? "text-primary font-medium"
                : "text-foreground")
            }
            href="#"
          >
            Sobre nosotros
          </a>
        </li>
        <li>
          <a
            className={
              "text-md " +
              (seccionActual === 2
                ? "text-primary font-medium"
                : "text-foreground")
            }
            href="#"
          >
            Misión y visión
          </a>
        </li>
        <li>
          <a
            className={
              "text-md " +
              (seccionActual === 3
                ? "text-primary font-medium"
                : "text-foreground")
            }
            href="#"
          >
            Contáctanos
          </a>
        </li>
      </ul>
      <div className="login">
        <LoginModal />
      </div>
    </nav>
    // <Navbar variant="sticky" className="shadow-small navbar">
    //   <NavbarBrand>
    //     <Link href="#">
    //       <img id="logo" src="../../assets/LogoTextoHD.png" alt="Logo" />
    //     </Link>
    //   </NavbarBrand>

    //   <NavbarContent className="sm:flex gap-4" justify="center">
    //     <NavbarItem>
    //       <Link href="#" color={seccionActual === 0 ? "primary" : "foreground"}>
    //         Inicio
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link
    //         href="#Sobre-nosotros"
    //         color={seccionActual === 1 ? "primary" : "foreground"}
    //       >
    //         Sobre nosotros
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link
    //         href="#Mision-y-vision"
    //         color={seccionActual === 2 ? "primary" : "foreground"}
    //       >
    //         Misión y visión
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link
    //         href="#Contactanos"
    //         color={seccionActual === 3 ? "primary" : "foreground"}
    //       >
    //         Contáctanos
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarContent justify="end">
    //     <NavbarItem>
    //       <LoginModal />
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
  );
}
