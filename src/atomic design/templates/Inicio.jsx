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
import BarraEdicion from "../molecules/BarraEdicion";
import VisionMision from "../molecules/VisionMision";

import { cargarContenido } from "../../services/contenido";

import BannerPrincipal from "../../assets/banner.png";
import Gradiente from "../../assets/gradiente.png";
import IconoVision from "../../assets/iconoVision.png";
import IconoMision from "../../assets/iconoMision.png";
import FondoContacto from "../../assets/fondoContacto.png";

function Inicio({ modoEditar = false }) {
  const [mision, setMision] = useState("");
  const [vision, setVision] = useState("");

  useEffect(() => {
    cargarContenido({ setMision, setVision });
    console.log("mision: ", mision);
    console.log("vision: ", vision);
  }, [vision, mision]);

  const [seccionActual, setSeccionActual] = useState(0);

  return (
    <>
      {!modoEditar ? (
        <BarraNav seccionActual={seccionActual} />
      ) : (
        <BarraEdicion setSeccionActual={setSeccionActual} />
      )}
      <MotionDiv duracion={1.5} delay={0.25} y={10}>
        <section id="Inicio">
          <Waypoint
            onEnter={() => {
              setSeccionActual(0);
            }}
          />
          <div className="width-window">
            <div id="banner">
              <div className="pad-left">
                <img className="grad" src={Gradiente} />
              </div>
              <div className="centered">
                <img className="img-front" src={BannerPrincipal} />
              </div>
            </div>
            <div className="text-hero">
              <MotionDiv duracion={3} delay={1.25} y={50}>
                <p className="font-extralight text-primary text-4xl">
                  La esencia de <br /> la{" "}
                  <span className="font-semibold">pureza</span>
                </p>
              </MotionDiv>
              <MotionDiv duracion={3} delay={3} y={25}>
                <Button
                  as={Link}
                  href="#Sobre-nosotros"
                  className="boton text-white font-light text-md"
                  variant="solid"
                  color="secondary"
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
      <section id="Mision-y-vision">
        <Waypoint
          bottomOffset={"80%"}
          // topOffset={"95%"}
          onEnter={() => {
            setSeccionActual(2);
          }}
        />
        <div>
          <MotionDiv duracion={2}>
            <h1
              id="titulo-seccion"
              className="text-2xl font-medium text-primary"
            >
              Misión y visión
            </h1>
          </MotionDiv>
          <MotionDiv duracion={1} x={-30} delay={1}>
            <VisionMision
              titulo={"Nuestra Misión"}
              contenido={mision}
              icono={IconoMision}
              imagen="https://img77.uenicdn.com/image/upload/v1581406264/category/shutterstock_256848448.jpg"
              modoEditar={modoEditar}
            />
          </MotionDiv>
          <Spacer y={2} />
          <MotionDiv duracion={1} x={30} delay={1.5}>
            <VisionMision
              titulo={"Nuestra Visión"}
              contenido={vision}
              icono={IconoVision}
              imagen="https://admin.municipiospuebla.mx/sites/default/files/profeco-_estos_son_los_mejores_filtros_purificadores_de_agua.jpg"
              modoEditar={modoEditar}
            />
          </MotionDiv>
        </div>
      </section>

      <section id="Contactanos">
        <Waypoint
          onEnter={() => {
            setSeccionActual(3);
          }}
        />
        <div>
          {/* <ContactanosSection /> */}
          <img src={FondoContacto} />
        </div>
      </section>
    </>
  );
}

export default Inicio;
