import React from "react";
import MediaCard from "../atoms/MediaCard"; // Asegúrate de ajustar la ruta según la ubicación de tu archivo MediaCard

import IconoIg from "../../assets/instagramlogo.png";
import IconoFb from "../../assets/facebooklogo.png";

export default function RedesSociales({ userIg, userFb }) {
  return (
    <div className="redes-sociales">
      <div className="media-card">
        <MediaCard
          ImageSource={IconoIg}
          Title="Nuestro Instagram"
          User="@AquaplusHN"
          Text="Slogan para Instagram"
          HyperlinkText="Ir a Instagram"
          MediaLink="https://github.com/nextui-org/nextui"
        />
      </div>
      <div className="media-card">
        <MediaCard
          ImageSource={IconoFb}
          Title="Nuestro Facebook"
          User="Aquaplus"
          Text="Slogan para Facebook"
          HyperlinkText="Ir a Facebook"
          MediaLink="https://github.com/nextui-org/nextui"
        />
      </div>
    </div>
  );
}
