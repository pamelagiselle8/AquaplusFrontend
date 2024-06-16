import React from "react";
import MediaCard from "../atoms/MediaCard"; // Asegúrate de ajustar la ruta según la ubicación de tu archivo MediaCard

import IconoIg from "../../assets/instagramlogo.png";
import IconoFb from "../../assets/facebooklogo.png";

export default function RedesSociales({ userIg, userFb }) {
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
