import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import Boton from "../atoms/Boton";
import { MailIcon } from '../icons/MailIcon.jsx';
import { LockIcon } from '../icons/LockIcon.jsx';

export default function LoginModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('blur');

    const handleOpen = (backdrop) => {
        setBackdrop(backdrop);
        onOpen();
    };

    // Apply CSS to prevent layout shift
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <Boton onPress={() => handleOpen('blur')} buttonText="Iniciar Sesión" />
            <Modal
                backdrop={backdrop}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Iniciar Sesión</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Correo Electrónico"
                                    placeholder="Ingresa tu Correo Electrónico"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Contraseña"
                                    placeholder="Ingresa tu Contraseña"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox classNames={{ label: "text-small" }}>
                                        Recordarme
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Olvidaste tu Contraseña?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Boton buttonText="Cerrar" onPress={onClose} />
                                <Button color="primary" onPress={onClose}>
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
