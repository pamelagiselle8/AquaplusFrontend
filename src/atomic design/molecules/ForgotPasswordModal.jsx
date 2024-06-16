import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { MailIcon } from "../icons/MailIcon";
import Boton from "../atoms/Boton";

export default function ForgotPasswordModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // State for success message

    const resetFields = () => {
        setEmail("");
        setErrorMessage("");
        setSuccessMessage("");
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("https://backendaquaplus.onrender.com/resetPassword", { email });
            const { success } = response.data;
            if (success) {
                setSuccessMessage("¡Correo electrónico para restablecer contraseña enviado exitosamente!");
                // Optionally, you can close the modal or reset the form fields here
            } else {
                setErrorMessage("No se pudo enviar el correo electrónico para restablecer la contraseña.");
            }
        } catch (error) {
            console.error("Error resetting password:", error.message);
            setErrorMessage("Ocurrió un error durante el proceso. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <>
            <Button color="secondary" variant="light" onClick={onOpen} >
                {/* <Button color="primary" variant="light" onClick={onOpen} > */}
                ¿Olvidaste tu contraseña?
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={(isOpen) => {
                    onOpenChange(isOpen);
                    if (!isOpen) {
                        resetFields();
                    }
                }}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <Spacer y={2} />
                            <ModalHeader className="text-primary">Recuperar Contraseña</ModalHeader>
                            <Spacer y={1} />
                            <ModalBody>
                                <p className="text-default">Ingrese su correo electrónico para poder recuperar su contraseña de acceso al sistema.</p>
                                <Spacer y={5} />
                                <Input
                                    color="primary"
                                    className="text-default"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    endContent={<MailIcon className="text-lg text-secondary text-default-400 pointer-events-none flex-shrink-0" />}
                                    label={<p className="text-default">Correo electrónico</p>}
                                    variant="bordered"
                                />
                                {errorMessage && (
                                    <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                                        {errorMessage}
                                    </p>
                                )}
                                {successMessage && (
                                    <p style={{ color: "green", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                                        {successMessage}
                                    </p>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Boton buttonText="Cerrar" onPress={onClose} />
                                <Button
                                    color="primary"
                                    className="text-white"
                                    onPress={handleSubmit}
                                >
                                    Enviar Correo
                                </Button>

                            </ModalFooter>
                            <Spacer y={1} />
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
