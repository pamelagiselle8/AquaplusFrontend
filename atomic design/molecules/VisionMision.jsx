import { Image, Input, Spacer, Textarea } from "@nextui-org/react";
// import TextArea from "../atoms/TextArea";

export default function VisionMision({
  titulo,
  contenido,
  icono,
  imagen,
  modoEditar = false,
}) {
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$20", $$cardColor: "$colors$primary" }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="width-window ">
      <div className="div-icono-texto">
        <img className="icono" src={icono} />
        <div className="div-texto">
          <h1 className="text-lg text-primary titulo">{titulo}</h1>
          {!modoEditar ? (
            <h1 className="text-md font-light text-default">{contenido}</h1>
          ) : (
            <>
              <Textarea
                fullWidth
                value={contenido}
                description="Editar contenido aqui"
                variant="bordered"
                className="text-md font-light text-default text-fw"
              ></Textarea>
            </>
          )}
        </div>
      </div>
      <div className="div-imagen">
        <Image removeWrapper className="imagen" src={imagen} />
      </div>
    </div>
  );
}
