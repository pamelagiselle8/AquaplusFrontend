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
import { useEffect, useState } from "react";
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

  useEffect(() => {
    cargarContenido({ setContenido });
  }, [contenido]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    cargarContenido({ setContenido });
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const [seccionActual, setSeccionActual] = useState(0);

  return (
    <>
      {!modoEditar && !isLoggedIn ? (
        <BarraNav seccionActual={seccionActual} />
      ) : (
        <BarraEdicion
          contenido={contenido}
          setContenido={setContenido}
          setSeccionActual={setSeccionActual}
        />
      )}
      <MotionDiv modoEditar={modoEditar} duracion={1.5} delay={0.25} y={10}>
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
        <Waypoint
          onEnter={() => {
            setSeccionActual(1);
          }}
        />
        <div>
          <MotionDiv modoEditar={modoEditar} duracion={2} y={40}>
            <h1
              id="titulo-seccion"
              className="text-2xl font-medium text-primary"
            >
              Sobre nosotros
            </h1>
          </MotionDiv>
          <div className="historia">
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
              <TextArea
                defaultValue={contenido.sobreNosotros}
                description={"Editar contenido aquí"}
                onValueChange={(value) => {
                  contenido.sobreNosotros = value;
                }}
              />
            )}
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

      <MotionDiv modoEditar={modoEditar} duracion={1} y={-30}>
        <section id="Contactanos">
          <Waypoint
            // topOffset={"95%"}
            onEnter={() => {
              setSeccionActual(3);
            }}
          />
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
