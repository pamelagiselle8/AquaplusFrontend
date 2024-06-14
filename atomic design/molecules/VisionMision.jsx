import { Image } from "@nextui-org/react";

export default function VisionMision({ titulo, contenido, icono, imagen }) {
  return (
    <div className="width-window ">
      <div className="icono-texto">
        <img className="icono" src={icono} />
        <div className="texto">
          <h1 className="text-xl text-primary titulo">{titulo}</h1>
          <h1 className="text-lg font-light text-default">{contenido}</h1>
        </div>
      </div>
      <div className="imagen">
        <Image className="" src={imagen} />
      </div>
    </div>
  );
}
