import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Spacer,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";

import ContactanosSection from "../organisms/ContactanosSection";

import TextArea from "../atoms/TextArea";
import TextField from "../atoms/TextField";
import Card from "../atoms/Card";
import BarraNav from "../molecules/BarraNav";

function Inicio({ modoEditar = false }) {
  const [mision, setMision] = useState("");
  const [vision, setVision] = useState("");

  useEffect(() => {
    axios
      .get("https://backendaquaplus.onrender.com/obtenerMision")
      .then((res) => {
        setMision(res.data.contenido);
      });

    console.log("mision: ", mision);

    axios
      .get("https://backendaquaplus.onrender.com/obtenerVision")
      .then((res) => {
        setVision(res.data.contenido);
      });

    console.log("vision: ", vision);
  }, [vision, mision]);

  return (
    <>
      {!modoEditar ? (
        <BarraNav modoEditar={modoEditar} />
      ) : (
        <Navbar
          position="absolute"
          shouldHideOnScroll={false}
          height={"6rem"}
          isBordered
        >
          <NavbarBrand>
            <div>
              <p className="font-semibold text-xl">
                Módulo de edición de contenido
              </p>
              <p className="font-light">Vista previa de la página web</p>
            </div>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-4" justify="center">
            <NavbarItem>
              <Button as={Link} color="primary" href="/" variant="solid">
                Guardar cambios
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/" variant="flat">
                Descartar cambios
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      )}
      <section id="hero">
        <div className="width-window">
          <div id="banner">
            <div className="pad-left">
              <img className="grad" src="../assets/gradiente.png" />
            </div>
            <div className="centered">
              <img className="img-front" src="../assets/banner.png" />
            </div>
          </div>
          <div className="text-hero">
            <p className="font-extralight text-primary text-2xl">
              La esencia de <br /> la{" "}
              <span className="font-semibold">pureza</span>
            </p>
            <Button
              as={Link}
              href="#Sobre-nosotros"
              className="boton text-white font-light text-md"
              variant="solid"
              color="primary"
              radius="full"
            >
              Saber más
            </Button>
          </div>
        </div>
      </section>

      <section id="Sobre-nosotros"></section>

      <section id="Contactanos">
        {/* <ContactanosSection /> */}
        {/* <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
      </section>
    </>
  );
}

export default Inicio;
