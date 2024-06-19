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
import LogoTexto from "../../assets/LogoTextoHD.png";

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

  const [campoMisionValido, setCampoMisionValido] = useState(true);
  const [campoVisionValido, setCampoVisionValido] = useState(true);
  const [campoHistoriaValido, setCampoHistoriaValido] = useState(true);

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

  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop - section.offsetTop * 0.2;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight &&
        section.id !== "Contactanos"
      ) {
        setActiveSection(section.id);
      }
    });
    if (pageYOffset + window.innerHeight === document.body.scrollHeight) {
      setActiveSection("Contactanos");
    }
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("section");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveSection("Inicio");
  }, [sections.current]);

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
          setSeccionActual={setActiveSection}
          misionValida={campoMisionValido}
          visionValida={campoVisionValido}
          historiaValida={campoHistoriaValido}
        />
      )}
      <section id="Inicio">
        <div className="width-window">
          <MotionDiv modoEditar={modoEditar} duracion={1.5} delay={0.25}>
            <div id="banner">
              <div className="pad-left">
                <img className="grad" src={Gradiente} />
              </div>
              <div className="centered">
                <img className="img-front" src={BannerPrincipal} />
              </div>
            </div>
          </MotionDiv>
          <div className="text-hero">
            <MotionDiv modoEditar={modoEditar} duracion={2.5} delay={0.25}>
              <Image removeWrapper className="logo" src={LogoTexto} />
            </MotionDiv>

            <MotionDiv
              modoEditar={modoEditar}
              duracion={3.25}
              delay={2}
              x={-45}
            >
              <p className="font-medium-italic text-primary text-lg">
                Por su salud
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

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
                  setCampoHistoriaValido(
                    e.target.value.length > 0 &&
                      e.target.value.trim().length > 0
                  );
                }}
                placeholder="Editar contenido aquí"
              />
            )}
            {!modoEditar ? (
              ""
            ) : campoHistoriaValido ? (
              <p className="descripcion">Editar contenido aquí</p>
            ) : (
              <span className="descripcion error font-medium">
                Este campo no puede estar vacío
              </span>
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
              setCampoValido={setCampoMisionValido}
              campoValido={campoMisionValido}
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
              setCampoValido={setCampoVisionValido}
              campoValido={campoVisionValido}
            />
          </MotionDiv>
        </div>
      </section>

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
