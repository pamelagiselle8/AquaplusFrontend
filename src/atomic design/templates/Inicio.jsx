import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Spacer,
  Image,
  Textarea,
} from "@nextui-org/react";
import { useEffect, useState, useRef } from "react";
import { Waypoint } from "react-waypoint";

// Atomos
import TextArea from "../atoms/TextArea";
import TextField from "../atoms/TextField";
import Card from "../atoms/Card";
import MotionDiv from "../atoms/MotionDiv";

// Moleculas
import ContactanosForm from "../molecules/ContactanosForm";
import BarraNav from "../molecules/BarraNav";
import BarraEdicion from "../molecules/BarraEdicion";
import VisionMision from "../molecules/VisionMision";
import RedesSociales from "../molecules/RedesSociales";

// Organismos
import ContactanosSection from "../organisms/ContactanosSection";

// Imagenes
import BannerPrincipal from "../../assets/banner.png";
import Gradiente from "../../assets/gradiente.png";
import IconoVision from "../../assets/iconoVision.png";
import IconoMision from "../../assets/iconoMision.png";
import FondoContacto from "../../assets/fondoContacto.png";

// Servicios
import { cargarContenido } from "../../services/contenido";

function Inicio({ modoEditar = false }) {
  const [contenido, setContenido] = useState({
    sobreNosotros: "",
    contentMision: "",
    contentVision: "",
    imgVision: "",
    imgMision: "",
    usuarioIg: "",
    usuarioFb: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [historia, setHistoria] = useState("");
  React.useEffect(() => {
    setHistoria(contenido.sobreNosotros);
  }, [contenido.sobreNosotros]);

  useEffect(() => {
    if (modoEditar) {
      //   const token = localStorage.getItem("authToken"); //ASI NO, USAR COOKIES
      //   //CHEQUEAR EN LA DB SI EXISTE Y ES VALIDO, SI LO ES ENTONCES SETISLOGGEDIN TRUE
      //  // esto estaria bien si encriptaramos las cookies / localStorage, sino olvidese
      //  // que backend nos mande un token encriptado, lo guardamos en localStorage y lo mandamos a backend para que lo desencripte
      //   if (token) {
      setIsLoggedIn(true);
      //   }
    }
    if (true) {
      const fetchData = async () => {
        const data = await cargarContenido();
        setContenido(data);
      };
      fetchData().catch(console.error);
    }
  }, []);

  const [seccionActual, setSeccionActual] = useState(0);

  const [activeSection, setActiveSection] = useState(" Inicio ");
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop =
        section.id !== "Inicio"
          ? section.offsetTop - section.offsetTop * 0.2
          : 0;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("section");
    window.addEventListener("scroll", handleScroll);
    // console.log(sections.current[0].id);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return modoEditar && !isLoggedIn ? (
    <div>NO TIENE ACCESO A ESTE MÓDULO</div>
  ) : (
    <>
      {!modoEditar && !isLoggedIn ? (
        <BarraNav seccionActual={activeSection} />
      ) : (
        <BarraEdicion
          contenido={contenido}
          setContenido={setContenido}
          setSeccionActual={setSeccionActual}
        />
      )}
      {/* <Waypoint
        onEnter={() => {
          setSeccionActual(0);
        }}
      /> */}
      {/* <Waypoint
        onEnter={() => {
          setSeccionActual(0);
        }}
      ></Waypoint> */}
      <MotionDiv modoEditar={modoEditar} duracion={1.5} delay={0.25} y={10}>
        <section id="Inicio">
          <div className="width-window">
            <div id="banner">
              <div className="pad-left">
                <img className="grad" src={Gradiente} />
                <Waypoint
                  onLeave={() => {
                    setSeccionActual(1);
                  }}
                />
              </div>
              <div className="centered">
                <img className="img-front" src={BannerPrincipal} />
              </div>
            </div>
            <div className="text-hero">
              <MotionDiv
                modoEditar={modoEditar}
                duracion={3}
                delay={1.25}
                y={50}
              >
                <p className="font-extralight text-primary text-4xl">
                  La esencia de <br /> la{" "}
                  <span className="font-semibold">pureza</span>
                </p>
              </MotionDiv>
              <MotionDiv modoEditar={modoEditar} duracion={3} delay={3} y={25}>
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

      <section id="Sobre-nosotros">
        <div>
          <MotionDiv modoEditar={modoEditar} duracion={2} y={40}>
            <h1
              id="titulo-seccion"
              className="text-2xl font-medium text-primary"
            >
              Sobre nosotros
            </h1>
          </MotionDiv>
          <div
            className="historia"
            style={modoEditar ? { display: "flex" } : {}}
          >
            {!modoEditar ? (
              contenido.sobreNosotros.split("\n\n").map((paragraph, index) => (
                <MotionDiv
                  modoEditar={modoEditar}
                  duracion={2}
                  delay={index + 1}
                  y={40}
                  key={index}
                >
                  <p
                    className="font-semilight text-md text-default contenido"
                    key={index}
                  >
                    {paragraph}
                  </p>
                </MotionDiv>
              ))
            ) : (
              <textarea
                className="misionVisionContainer text-default"
                value={historia}
                onChange={(e) => {
                  setHistoria(e.target.value);
                  contenido.sobreNosotros = e.target.value;
                }}
                placeholder="Editar contenido aquí"
              />
            )}
          </div>
        </div>
      </section>

      <section id="Mision-y-vision">
        <div>
          <MotionDiv modoEditar={modoEditar} duracion={2}>
            <h1
              id="titulo-seccion"
              className="text-2xl font-medium text-primary"
            >
              Misión y visión
            </h1>
          </MotionDiv>
          <Waypoint
            onEnter={() => {
              setSeccionActual(2);
            }}
          />
          <MotionDiv modoEditar={modoEditar} duracion={1} x={-30} delay={1}>
            <VisionMision
              titulo={"Nuestra Misión"}
              contenido={contenido.contentMision}
              icono={IconoMision}
              imagen={contenido.imgMision}
              modoEditar={modoEditar}
              onValueChange={(value) => {
                contenido.contentMision = value;
              }}
              onImgChange={(img) => {
                contenido.imgMision = img;
              }}
            />
          </MotionDiv>
          <Spacer y={2} />
          <MotionDiv modoEditar={modoEditar} duracion={1} x={30} delay={1}>
            <VisionMision
              titulo={"Nuestra Visión"}
              contenido={contenido.contentVision}
              icono={IconoVision}
              imagen={contenido.imgVision}
              modoEditar={modoEditar}
              onValueChange={(value) => {
                contenido.contentVision = value;
              }}
              onImgChange={(img) => {
                contenido.imgVision = img;
              }}
            />
          </MotionDiv>
        </div>
      </section>
      <Waypoint
        // topOffset={"95%"}
        onEnter={() => {
          setSeccionActual(3);
        }}
      />
      <MotionDiv modoEditar={modoEditar} duracion={1} y={-30}>
        <section id="Contactanos">
          <div className="fondo-y-contacto">
            <div className="contacto">
              <ContactanosForm modoEditar={modoEditar} />
              <RedesSociales
                userIg={contenido.usuarioIg}
                userFb={contenido.usuarioFb}
                modoEditar={modoEditar}
                onUserIgChange={(user) => {
                  contenido.usuarioIg = user;
                }}
                onUserFbChange={(user) => {
                  contenido.usuarioFb = user;
                }}
              />
            </div>
            <div className="fondo-contacto">
              <img src={FondoContacto} />
            </div>
          </div>
        </section>
      </MotionDiv>

      <footer>
        <div className="footer">
          <div className="derechos">© 2024 AquaPlus</div>
        </div>
      </footer>
    </>
  );
}

export default Inicio;
