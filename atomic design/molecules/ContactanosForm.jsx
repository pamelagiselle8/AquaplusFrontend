import React from "react";
import { Card } from "@nextui-org/react";
import TextField from "../atoms/TextField"; 
import TextArea from "../atoms/TextArea";
import Boton from "../atoms/Boton";

function ContactCard() {
    const handleNameChange = (value) => console.log("Name:", value);
    const handleMessageChange = (value) => console.log("Message:", value);

    return (
        <Card>
            <div style={{ padding: "25px" }}>
                <h1 style={{ marginBottom: "20px", fontSize: "24px", color: "#333" }}>Contáctate con Nosotros</h1>
                <div style={{ display: "flex", marginBottom: "20px", gap: "10px" }}>
                    <TextField
                        label="Nombre"
                        placeholder="Ingresa tu Nombre"
                        onValueChange={handleNameChange}
                    />
                    <TextField
                        label="Correo Electronico"
                        placeholder="Ingresa tu Correo Electronico"
                        onValueChange={handleNameChange} // Assuming it's the same handler as for the name
                    />
                </div>
                <TextArea
                    label="Mensaje"
                    placeholder="Escribe tu Mensaje Aquí"
                    onValueChange={handleMessageChange}
                />
                <br />
                <Boton buttonText="Enviar"/>
            </div>
        </Card>
    );
}

export default ContactCard;
