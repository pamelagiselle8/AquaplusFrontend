import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Spacer,
} from "@nextui-org/react";
import Boton from "../atoms/Boton";
import { MailIcon } from "../icons/MailIcon.jsx";
import { LockIcon } from "../icons/LockIcon.jsx";
import axios from "axios";

export default function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = useState("blur");

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://backendaquaplus.onrender.com/logIn", { email, password });
      const { success, user } = response.data;
      if (success) {
        console.log("Login successful:", user);
        window.location.href = "/cms"; 
      } else {
        console.log("Login failed");
        setErrorMessage("El Correo o Contraseña que ingresó es incorrecto. Por favor, inténtalo de nuevo."); // Set error message
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setErrorMessage("Ocurrió un error durante el inicio de sesión. Por favor, inténtalo de nuevo."); // Set error message
    }
  };

  // Apply CSS to prevent layout shift
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <Button
        className="rounded-full shadow-small boton-login"
        color="primary"
        variant="flat"
        onPress={() => handleOpen("blur")}
        fullWidth
        size="md"
      >
        Iniciar Sesión
      </Button>
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <Spacer y={2} />
              <ModalHeader className="text-primary">Iniciar sesión</ModalHeader>
              <Spacer y={1} />
              <ModalBody>
                <Input
                  color="primary"
                  className="text-default"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  endContent={
                    <MailIcon className="text-lg text-secondary text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label={<p className="text-default">Correo electrónico</p>}
                  variant="bordered"
                />
                <Input
                  color="primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endContent={
                    <LockIcon className="text-lg text-secondary text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label={<p className="text-default">Contraseña</p>}
                  type="password"
                  variant="bordered"
                />
                {errorMessage && (
                  <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                    {errorMessage}
                  </p>
                )}
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    color="secondary"
                    className="text-white"
                    classNames={{ label: "text-small" }}
                  >
                    Recuérdame
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Spacer y={1} />
              </ModalBody>
              <ModalFooter>
                <Boton buttonText="Cerrar" onPress={onClose} />
                <Button
                  color="primary"
                  className="text-white"
                  onPress={handleSubmit}
                >
                  Iniciar Sesión
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
