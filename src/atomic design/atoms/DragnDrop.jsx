import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { GalleryIcon } from "../icons/GalleryIcon";
import { Image, Chip, Spacer } from "@nextui-org/react";

const fileTypes = ["JPG", "PNG", "JPEG"];

function DragDrop({ titulo, actualizarImagen, defaultImg }) {
  const [archivo, setArchivo] = useState(defaultImg);
  useEffect(() => {
    setArchivo(defaultImg);
  }, [defaultImg]);

  const [chipText, setChipText] = useState("Imagen actual");
  const [infoText, setInfoText] = useState(
    // "Seleccione o suelte la imagen aquí"
    <p>
      <u>Seleccione</u> o suelte la imagen aquí
    </p>
  );
  // const [label, setLabel] = useState(
  //   <>
  //     <Image className="image-preview" isZoomed src={file} />
  //     <Spacer y={4} />
  //     <Chip variant="flat" color="primary" startContent={<GalleryIcon />}>
  //       Imagen actual
  //     </Chip>
  //     <p className="font-light text-xs">
  //       <u>Seleccione</u> o suelte la imagen aquí
  //     </p>
  //   </>
  // );

  const handleChange = (file) => {
    console.log(file);
    setArchivo(file);
    actualizarImagen(file);
    var img = document.createElement("IMG");
    img.src = URL.createObjectURL(file);
    setArchivo(img.src);
    setChipText(
      file.name.length > 20 ? file.name.substring(0, 20) + "..." : file.name
    );
    setInfoText("Imagen seleccionada");
    // setLabel(
    //   <div>
    //     <Image className="image-preview" isZoomed src={img.src} />
    //     <Spacer y={4} />
    //     <Chip variant="flat" color="primary" startContent={<GalleryIcon />}>
    //       {file.name.length > 20
    //         ? file.name.substring(0, 20) + "..."
    //         : file.name}
    //     </Chip>
    //     <p className="font-light text-xs">Imagen seleccionada</p>
    //   </div>
    // );
  };

  return (
    <FileUploader
      required={true}
      multiple={false}
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      // label={label}
      hoverTitle="Suelte aquí"
      dropMessageStyle={{
        backgroundColor: "cornflowerblue",
        color: "white",
        opacity: 1,
        borderRadius: "12px",
        border: "none",
      }}
      children={
        <div id="drop-area">
          {
            // label
            <>
              <Image className="image-preview" isZoomed src={archivo} />
              <Spacer y={4} />
              <Chip
                variant="flat"
                color="primary"
                startContent={<GalleryIcon />}
              >
                {/* Imagen actual */}
                {chipText}
              </Chip>
              <p className="font-light text-xs">
                {infoText}
                {/* <u>Seleccione</u> o suelte la imagen aquí */}
              </p>
            </>
          }
        </div>
      }
    />
  );
}

export default DragDrop;
