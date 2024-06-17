import React from "react";
import { Image, Input, Spacer, Textarea } from "@nextui-org/react";
import TextArea from "../atoms/TextArea";

export default function VisionMision({
  titulo,
  contenido,
  icono,
  imagen,
  modoEditar = false,
  onValueChange = () => {},
}) {
  const [value, setValue] = React.useState(contenido);

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="width-window ">
      <div className="div-icono-texto">
        <img className="icono" src={icono} />
        <div className="div-texto">
          <h1 className="text-lg text-primary titulo">{titulo}</h1>
          {!modoEditar ? (
            <h1 className="text-md font-light text-default">{contenido}</h1>
          ) : (
            <>
              <TextArea
                maxLength={300}
                isRequired={false}
                value={value}
                description={"Editar contenido aquí (" + value.length + "/300)"}
                // onChange={(e) => {
                //   setValue(e.target.value);
                // }}
                onValueChange={setValue}
              />
            </>
          )}
        </div>
      </div>
      <div className="div-imagen">
        <Image removeWrapper className="imagen" src={imagen} />
      </div>
    </div>
  );
}
