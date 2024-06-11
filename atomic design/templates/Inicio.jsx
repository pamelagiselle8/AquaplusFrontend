import TextArea from "../atoms/TextArea";
import TextField from "../atoms/TextField";
import Card from "../atoms/Card";

import ContactanosSection from "../organisms/ContactanosSection";

import BarraNav from "../molecules/BarraNav";

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
      <section id="hero-section">
        <div id="hero" className="width-window">
          <div className="pad-left">
            <img className="grad" src="../assets/gradiente.png" />
          </div>
          <div className="centered">
            <img className="img-front" src="../assets/banner.png" />
          </div>
        </div>
      </section>

      <section
        id="Mision&Vision"
        style={{ position: "relative", textAlign: "center" }}
      >
        <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div
          className="centered"
          style={{
            position: "absolute",
            top: "70%",
            left: "2%",
            right: "2%",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            justifycontent: "center",
            padding: "20px",
            borderradius: "25px",
            display: "flex",
            gap: "30px",
          }}
        >
          <Card
            title={"Misión"}
            text={
              modoEditar ? (
                <TextArea description="Editar misión" defaultValue={mision} />
              ) : (
                "Misión"
              )
            }
          />
          <Card
            title="Visión"
            text={
              modoEditar ? (
                <TextArea description="Editar visión" defaultValue={vision} />
              ) : (
                "Visión"
              )
            }
          />
        </div>
      </section>

      <section id="Contactanos">
        <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ContactanosSection />
      </section>
    </>
  );
}

export default Inicio;
