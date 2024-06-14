import { Image } from "@nextui-org/react";

export default function VisionMision({ titulo, contenido, icono, imagen }) {
  return (
    <div className="width-window ">
      <div className="div-icono-texto">
        <img className="icono" src={icono} />
        <div className="div-texto">
          <h1 className="text-xl text-primary titulo">{titulo}</h1>
          <h1 className="text-lg font-light text-default">{contenido}</h1>
        </div>
      </div>
      <div className="div-imagen">
        <Image width={500} shadow="sm" src={imagen} />
      </div>
    </div>
  );
}
