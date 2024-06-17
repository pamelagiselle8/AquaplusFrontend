import React from "react";
import { Input } from "@nextui-org/react";

import MediaCard from "../atoms/MediaCard"; // Asegúrate de ajustar la ruta según la ubicación de tu archivo MediaCard
import TextField from "../atoms/TextField";

import IconoIg from "../../assets/instagramlogo.png";
import IconoFb from "../../assets/facebooklogo.png";

export default function RedesSociales({
  userIg,
  userFb,
  modoEditar,
  onUserIgChange,
  onUserFbChange,
}) {
  if (modoEditar) {
    return (
      <div className="redes-sociales">
        <div className="media-card">
          <MediaCard
            ImageSource={IconoIg}
            Title="Nuestro Instagram"
            User={
              <TextField
                className="input"
                maxLength={30}
                label="Usuario de Instagram"
                description="Editar usuario aquí"
                defaultValue={userIg}
                onValueChange={onUserIgChange}
              />
            }
            HyperlinkText="Ir a Instagram"
          />
        </div>
        <div className="media-card">
          <MediaCard
            ImageSource={IconoFb}
            Title="Nuestro Facebook"
            User={
              <TextField
                className="input"
                maxLength={50}
                label="Usuario de Facebook"
                description="Editar usuario aquí"
                defaultValue={userIg}
                onValueChange={onUserFbChange}
              />
            }
            HyperlinkText="Ir a Facebook"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="redes-sociales">
      {userIg && (
        <div className="media-card">
          <MediaCard
            ImageSource={IconoIg}
            Title="Nuestro Instagram"
            User={userIg}
            HyperlinkText="Ir a Instagram"
            MediaLink={"https://www.instagram.com/" + userIg + "/"}
          />
        </div>
      )}
      {userFb && (
        <div className="media-card">
          <MediaCard
            ImageSource={IconoFb}
            Title="Nuestro Facebook"
            User={userFb}
            HyperlinkText="Ir a Facebook"
            MediaLink="https://github.com/nextui-org/nextui"
          />
        </div>
      )}
    </div>
  );
}
