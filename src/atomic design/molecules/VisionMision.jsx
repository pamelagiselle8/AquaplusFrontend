import React from "react";
import { Image, Input, Spacer, Textarea } from "@nextui-org/react";
import TextArea from "../atoms/TextArea";
import DragDrop from "../atoms/DragnDrop";

export default function VisionMision({
  titulo,
  contenido,
  icono,
  imagen,
  modoEditar = false,
  onValueChange = () => {},
  onImgChange = () => {},
  campoValido = true,
  setCampoValido = () => {},
}) {
  const [valueMV, setValueMV] = React.useState("");

  React.useEffect(() => {
    setValueMV(contenido);
  }, [contenido]);

  return (
    <div className="width-window ">
      <div className="div-icono-texto">
        <img className="icono" src={icono} />
        <div className="div-texto">
          <h1 className="text-lg text-primary titulo">{titulo}</h1>
          {!modoEditar && (
            <h1 className="text-md font-light text-default">{contenido}</h1>
          )}
          {modoEditar && (
            <>
              <textarea
                className="misionVisionContainer text-default"
                value={valueMV}
                onChange={(e) => {
                  setValueMV(e.target.value);
                  onValueChange(e.target.value);
                  setCampoValido(
                    e.target.value.length > 0 &&
                      e.target.value.trim().length > 0
                  );
                }}
                placeholder="Editar contenido aquí"
              />
              {campoValido ? (
                <span className="descripcion">
                  Editar contenido aquí ({valueMV.length}/300)
                </span>
              ) : (
                <span className="descripcion error font-medium">
                  Este campo no puede estar vacío
                </span>
              )}
            </>
          )}
        </div>
      </div>
      <div className="div-imagen">
        {!modoEditar ? (
          <Image removeWrapper className="imagen" src={imagen} />
        ) : (
          <DragDrop
            titulo={"Cambiar imagen"}
            actualizarImagen={onImgChange}
            defaultImg={imagen}
          />
        )}
      </div>
    </div>
  );
}
