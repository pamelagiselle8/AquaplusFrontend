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
  Spacer,
} from "@nextui-org/react";
import Boton from "../atoms/Boton";
import { MailIcon } from "../icons/MailIcon.jsx";
import { LockIcon } from "../icons/LockIcon.jsx";

export default function LoginModal() {
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
        onPress={() => handleOpen("blur")}
        size="sm"
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
              <ModalHeader className="text-lg text-primary">
                Iniciar sesión
              </ModalHeader>
              <Spacer y={1} />
              <ModalBody>
                <Input
                  color="primary"
                  className="text-default"
                  autoFocus
                  endContent={
                    <MailIcon className="text-lg text-secondary text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label={<p className="text-default">Correo electrónico</p>}
                  variant="bordered"
                />
                <Input
                  color="primary"
                  endContent={
                    <LockIcon className="text-lg text-secondary text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label={<p className="text-default">Contraseña</p>}
                  type="password"
                  variant="bordered"
                />
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
                  onPress={() => {
                    onClose;
                    window.location.href = "/cms";
                  }}
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
