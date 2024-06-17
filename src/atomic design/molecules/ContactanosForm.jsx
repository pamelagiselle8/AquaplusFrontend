import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import Logo from "../../assets/logo.png";

function ContactCard({ modoEditar }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => setNombre(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMensaje(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("https://backendaquaplus.onrender.com/enviarCorreo", {
        nombre,
        email,
        mensaje,
      });

      if (response.status === 200) {
        setSuccessMessage("Correo enviado exitosamente.");
        setNombre("");
        setEmail("");
        setMensaje("");
      }
    } catch (error) {
      setErrorMessage("Error al enviar el correo. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="card-contacto">
      <CardHeader className="text-xl">
        <img src={Logo} className="logo" alt="Logo" />
        Contáctanos
      </CardHeader>
      <CardBody className="campos-contacto">
        <form onSubmit={handleSubmit}>
          <div className="nombre-correo">
            <Input
              isDisabled={modoEditar || isSubmitting}
              id="input-nombre"
              variant="bordered"
              label="Nombre completo"
              value={nombre}
              onChange={handleNameChange}
              required
            />
            <Input
              isDisabled={modoEditar || isSubmitting}
              id="input-correo"
              variant="bordered"
              label="Correo electrónico"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mensaje">
            <Textarea
              isDisabled={modoEditar || isSubmitting}
              variant="bordered"
              label="Mensaje"
              value={mensaje}
              onChange={handleMessageChange}
              required
            />
          </div>
          <CardFooter className="footer-contacto">
            <Button
              type="submit"
              variant="flat"
              color="primary"
              isDisabled={modoEditar || isSubmitting}
              label="Enviar"
            >
              Enviar
            </Button>
          </CardFooter>
        </form>
        {successMessage && <p style={{ color: "green"}}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </CardBody>
    </Card>
  );
}

export default ContactCard;
