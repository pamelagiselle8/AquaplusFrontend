import React from "react";
import { Input } from "@nextui-org/react";

import MediaCard from "../atoms/MediaCard";
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
  const [userIG, setUserIG] = React.useState("");
  React.useEffect(() => {
    setUserIG(userIg);
  }, [userIg]);

  const [userFB, setUserFB] = React.useState("");
  React.useEffect(() => {
    setUserFB(userFb);
  }, [userFb]);

  if (modoEditar) {
    return (
      <div className="redes-sociales">
        <div className="media-card">
          <MediaCard
            modoEditar={modoEditar}
            ImageSource={IconoIg}
            Title="Nuestro Instagram"
            User={
              <>
                <textarea
                  className="misionVisionContainer text-default"
                  value={userIG}
                  maxLength={30}
                  onChange={(e) => {
                    setUserIG(e.target.value);
                    onUserIgChange(e.target.value);
                  }}
                  placeholder="URL del perfil de Instagram"
                />
                <span className="descripcion">Editar URL aquí</span>
              </>
            }
            HyperlinkText="Ir a Instagram"
          />
        </div>
        <div className="media-card">
          <MediaCard
            modoEditar={modoEditar}
            ImageSource={IconoFb}
            Title="Nuestro Facebook"
            User={
              <>
                <textarea
                  className="misionVisionContainer text-default"
                  value={userFB}
                  onChange={(e) => {
                    setUserFB(e.target.value);
                    onUserFbChange(e.target.value);
                  }}
                  placeholder="URL del perfil de Facebook"
                />
                <span className="descripcion">Editar URL aquí</span>
              </>
            }
            HyperlinkText="Ir a Facebook"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="redes-sociales">
      {userIg !== "" && (
        <div className="media-card">
          <MediaCard
            ImageSource={IconoIg}
            Title="Nuestro Instagram"
            User={userIg}
            HyperlinkText="Ir a Instagram"
            // MediaLink={"https://www.instagram.com/" + userIg + "/"}
          />
        </div>
      )}
      {userFb !== "" && (
        <div className="media-card">
          <MediaCard
            ImageSource={IconoFb}
            Title="Nuestro Facebook"
            User={userFb}
            HyperlinkText="Ir a Facebook"
            // MediaLink="https://github.com/nextui-org/nextui"
          />
        </div>
      )}
    </div>
  );
}
