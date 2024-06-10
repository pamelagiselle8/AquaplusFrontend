import React from "react";
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
} from "@nextui-org/react";
import Boton from "../atoms/Boton";
import { MailIcon } from "../icons/MailIcon.jsx";
import { LockIcon } from "../icons/LockIcon.jsx";

export default function LoginModal({ modoEditar = false }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
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
        className="rounded-large shadow-small"
        color="primary"
        variant="flat"
        onPress={
          !modoEditar
            ? () => handleOpen("blur")
            : () => {
                window.location.href = "/";
              }
        }
      >
        {modoEditar ? "Descartar cambios" : "Iniciar Sesión"}
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
              <ModalHeader className="text-xl flex flex-col gap-1">
                Iniciar sesión
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Correo electrónico"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Contraseña"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox classNames={{ label: "text-small" }}>
                    Recuérdame
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Boton buttonText="Cerrar" onPress={onClose} />
                <Button
                  color="primary"
                  onPress={() => {
                    onClose;
                    window.location.href = "/cms";
                  }}
                >
                  {/* <a href="/cms">Iniciar Sesión</a> */}
                  Iniciar Sesión
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
