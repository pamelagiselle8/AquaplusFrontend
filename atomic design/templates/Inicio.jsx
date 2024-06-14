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
import { Waypoint } from "react-waypoint";

import ContactanosSection from "../organisms/ContactanosSection";

import TextArea from "../atoms/TextArea";
import TextField from "../atoms/TextField";
import Card from "../atoms/Card";
import MotionDiv from "../atoms/MotionDiv";

import BarraNav from "../molecules/BarraNav";
import VisionMision from "../molecules/VisionMision";

import { cargarContenido } from "../../services/contenido";

function Inicio({ modoEditar = false }) {
  const [mision, setMision] = useState("");
  const [vision, setVision] = useState("");

  useEffect(() => {
    cargarContenido({ setMision, setVision });
    console.log("mision: ", mision);
    console.log("vision: ", vision);
  }, [vision, mision]);

  const [seccionActual, setSeccionActual] = useState(1);
  useEffect(() => {
    console.log(
      "current section is updated and this is its order ",
      seccionActual
    );
    // now you have the number indicates of the current section
    // you can manage how to make your nav bar react to that
  }, [seccionActual]);

  return (
    <>
      {!modoEditar ? (
        <BarraNav seccionActual={seccionActual} modoEditar={modoEditar} />
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
      <MotionDiv duracion={1.5} delay={0.25}>
        <section id="hero">
          <Waypoint
            onEnter={() => {
              setSeccionActual(1);
            }}
          />

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
              <MotionDiv duracion={3} delay={1.5} y={35}>
                <p className="font-extralight text-primary text-4xl">
                  La esencia de <br /> la{" "}
                  <span className="font-semibold">pureza</span>
                </p>
              </MotionDiv>
              <MotionDiv duracion={2.5} delay={2.5} y={25}>
                <Button
                  as={Link}
                  href="#Sobre-nosotros"
                  className="boton text-white font-light text-md"
                  variant="solid"
                  // color="secondary"
                  color="primary"
                  radius="full"
                >
                  Saber más
                </Button>
              </MotionDiv>
            </div>
          </div>
        </section>
      </MotionDiv>

      {/* <section id="Sobre-nosotros">
        <Waypoint
          onEnter={() => {
            setSeccionActual(1);
          }}
        />
      </section> */}

      <MotionDiv duracion={1} x={-10}>
        <section id="Mision-y-vision">
          <Waypoint
            onEnter={() => {
              setSeccionActual(2);
            }}
          />
          <div>
            <h1
              id="titulo-seccion"
              className="text-2xl font-medium text-primary"
            >
              Misión y visión
            </h1>
            <VisionMision
              titulo={"Nuestra Misión"}
              contenido={mision}
              icono="../assets/iconoMision.png"
              imagen="https://img77.uenicdn.com/image/upload/v1581406264/category/shutterstock_256848448.jpg"
            />
            <Spacer y={2} />
            <VisionMision
              titulo={"Nuestra Visión"}
              contenido={vision}
              icono="../assets/iconoVision.png"
              imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHpTBFTQCvLaFmxss_ZgItKwDSIhTgogpi94HsTClowmyCLP0CGiU7TZ5XUsTAo8UgpM&usqp=CAU"
            />
          </div>
        </section>
      </MotionDiv>

      <section id="Contactanos">
        <Waypoint
          onEnter={() => {
            setSeccionActual(3);
          }}
        />
        {/* <ContactanosSection /> */}
        {/* <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
      </section>
    </>
  );
}

export default Inicio;
