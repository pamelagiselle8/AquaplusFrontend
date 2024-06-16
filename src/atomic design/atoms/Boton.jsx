import React from "react";
import { Button } from "@nextui-org/react";

export default function Boton({ buttonText, onPress }) {
  return (
    <Button
      className="rounded-large shadow-small"
      color="primary"
      variant="flat"
      onPress={onPress}
    >
      {buttonText}
    </Button>
  );
}
