import BarraNav from "../molecules/BarraNav";

function Inicio() {
  return (
    <>
      <BarraNav />
      <div className="width-window">
        <div className="pad-left">
          <img className="grad" src="../assets/gradiente.png" />
        </div>
        <div className="centered">
          <img className="img-front" src="../assets/banner.png" />
        </div>
      </div>
    </>
  );
}

export default Inicio;
