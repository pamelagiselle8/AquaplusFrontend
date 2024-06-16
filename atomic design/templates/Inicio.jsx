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
import IconoMision from "../../assets/iconomision.png";

function Inicio({ modoEditar = false }) {
  const [mision, setMision] = useState("");
  const [vision, setVision] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in

  useEffect(() => {
    cargarContenido({ setMision, setVision });
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true); // Set isLoggedIn to true if token exists
    }
  }, []);

  const [seccionActual, setSeccionActual] = useState(0);

  return (
    <>
      {!modoEditar && !isLoggedIn ? (
        <BarraNav seccionActual={seccionActual} />
      ) : (
        <BarraEdicion setSeccionActual={setSeccionActual} />
      )}
      <section id="Inicio">
        <Waypoint
          onEnter={() => {
            setSeccionActual(0);
          }}
        />
        <div className="width-window">
          <div id="banner">
            <div className="pad-left">
              <img className="grad" src={Gradiente} alt="Gradient" />
            </div>
            <div className="centered">
              <img className="img-front" src={BannerPrincipal} alt="Banner" />
            </div>
          </div>
          <div className="text-hero">
            <p className="font-extralight text-primary text-4xl">
              La esencia de <br /> la{" "}
              <span className="font-semibold">pureza</span>
            </p>
            <Button
              as="a"
              href="#Sobre-nosotros"
              className="boton text-white font-light text-md"
              variant="solid"
              color="secondary"
              radius="full"
            >
              Saber más
            </Button>
          </div>
        </div>
      </section>

      <section id="Mision-y-vision">
        <Waypoint
          onEnter={() => {
            setSeccionActual(2);
          }}
        />
        <div>
          <h1 id="titulo-seccion" className="text-2xl font-medium text-primary">
            Misión y visión
          </h1>
          <VisionMision
            titulo={"Nuestra Misión"}
            contenido={mision}
            icono={IconoMision}
            imagen="https://img77.uenicdn.com/image/upload/v1581406264/category/shutterstock_256848448.jpg"
            modoEditar={modoEditar}
          />

          <div className="py-4"></div>

          <VisionMision
            titulo={"Nuestra Visión"}
            contenido={vision}
            icono={IconoVision}
            imagen="https://admin.municipiospuebla.mx/sites/default/files/profeco-_estos_son_los_mejores_filtros_purificadores_de_agua.jpg"
            modoEditar={modoEditar}
          />
        </div>
      </section>
    </>
  );
}

export default Inicio;