import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { GalleryIcon } from "../icons/GalleryIcon";
import { Image, Chip, Spacer } from "@nextui-org/react";

const fileTypes = ["JPG", "PNG", "JPEG"];

function DragDrop({ titulo, actualizarImagen, defaultImg }) {
  const [label, setLabel] = useState(
    defaultImg ? (
      <>
        <Image className="image-preview" isZoomed src={defaultImg} />
        <Spacer y={4} />
        <Chip variant="flat" color="primary" startContent={<GalleryIcon />}>
          Imagen actual
        </Chip>
        <p className="font-light text-xs">
          <u>Seleccione</u> o suelte la imagen aquí
        </p>
      </>
    ) : (
      titulo
    )
  );
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    actualizarImagen(file);
    var img = document.createElement("IMG");
    img.src = URL.createObjectURL(file);

    setLabel(
      <div>
        <Image className="image-preview" isZoomed src={img.src} />
        <Spacer y={4} />
        <Chip variant="flat" color="primary" startContent={<GalleryIcon />}>
          {file.name.length > 20
            ? file.name.substring(0, 20) + "..."
            : file.name}
        </Chip>
        <p className="font-light text-xs">Imagen seleccionada</p>
      </div>
    );
  };
  return (
    <FileUploader
      required={true}
      multiple={false}
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      label={label}
      hoverTitle="Suelte aquí"
      dropMessageStyle={{
        backgroundColor: "cornflowerblue",
        color: "white",
        opacity: 1,
        borderRadius: "10px",
        border: "none",
      }}
      children={<div id="drop-area">{label}</div>}
    />
  );
}

export default DragDrop;
