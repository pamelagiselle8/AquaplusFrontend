import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import TextArea from "../atoms/TextArea";
import Boton from "../atoms/Boton";

import Logo from "../../assets/logo.png";

function ContactCard({ modoEditar }) {
  const handleNameChange = (value) => console.log("Name:", value);
  const handleMessageChange = (value) => console.log("Message:", value);

  return (
    <Card className="card-contacto">
      <CardHeader className="text-xl">
        <img src={Logo} className="logo" />
        Contáctanos
      </CardHeader>
      <CardBody className="campos-contacto">
        <div className="nombre-correo">
          <Input
            isDisabled={modoEditar}
            id="input-nombre"
            variant="bordered"
            label="Nombre completo"
            onValueChange={handleNameChange}
          />
          <Input
            isDisabled={modoEditar}
            id="input-correo"
            variant="bordered"
            label="Correo electrónico"
            onValueChange={handleNameChange} // Assuming it's the same handler as for the name
          />
        </div>
        <div className="mensaje">
          <Textarea
            isDisabled={modoEditar}
            variant="bordered"
            label="Mensaje"
            onValueChange={handleMessageChange}
          />
        </div>
      </CardBody>
      <CardFooter className="footer-contacto">
        <Button
          variant="flat"
          color="primary"
          isDisabled={modoEditar} // validar que este disabled cuando no esten todos los campos llenos
          label="Enviar"
        >
          Enviar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ContactCard;
