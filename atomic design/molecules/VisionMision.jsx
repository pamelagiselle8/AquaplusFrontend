export default function VisionMision({ titulo, contenido }) {
  return (
    <div className="margin-horizontal">
      <div>
        <h1 className="text-xl text-primary">{titulo}</h1>
        <h1 className="text-lg font-light text-default">{contenido}</h1>
      </div>

      {/* <img className="iconos" src="../assets/iconosVisionMision.png" /> */}
    </div>
  );
}
