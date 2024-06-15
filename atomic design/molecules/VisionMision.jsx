import { Image, Input, Spacer } from "@nextui-org/react";

export default function VisionMision({
  titulo,
  contenido,
  icono,
  imagen,
  modoEditar = false,
}) {
  return (
    <div className="width-window ">
      <div className="div-icono-texto">
        <img className="icono" src={icono} />
        <div className="div-texto">
          <h1 className="text-lg text-primary titulo">{titulo}</h1>
          <Spacer y={4} />
          {!modoEditar ? (
            <h1 className="text-md font-light text-default">{contenido}</h1>
          ) : (
            <>
              <Input
                value={contenido}
                description="Editar contenido aqui"
                variant="bordered"
              ></Input>
            </>
          )}
        </div>
      </div>
      <div className="div-imagen">
        <Image className="imagen" src={imagen} />
      </div>
    </div>
  );
}
