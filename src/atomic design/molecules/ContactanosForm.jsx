import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
// import TextField from "../atoms/TextField";
import TextArea from "../atoms/TextArea";
import Boton from "../atoms/Boton";

import Logo from "../../assets/logo.png";

function ContactCard() {
  const handleNameChange = (value) => console.log("Name:", value);
  const handleMessageChange = (value) => console.log("Message:", value);

  return (
    <Card className="card-contacto">
      <CardHeader className="text-xl">
        <img src={Logo} className="logo" />
        Contáctate con nosotros
      </CardHeader>
      <CardBody className="campos-contacto">
        <div className="nombre-correo">
          <Input
            id="input-nombre"
            variant="bordered"
            label="Nombre"
            onValueChange={handleNameChange}
          />
          <Input
            id="input-correo"
            variant="bordered"
            label="Correo Electronico"
            onValueChange={handleNameChange} // Assuming it's the same handler as for the name
          />
        </div>
        <div className="mensaje">
          <TextArea label="Mensaje" onValueChange={handleMessageChange} />
        </div>
      </CardBody>
      <CardFooter className="footer-contacto">
        <Boton buttonText="Enviar" />
      </CardFooter>
    </Card>
  );
}

export default ContactCard;
