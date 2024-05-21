import BarraNav from "../molecules/BarraNav";
import Tabla from "../organisms/Tabla";
import Boton from "../atoms/Boton";

function Inicio() {
  return (
    <>
      <BarraNav />
      <section>
        <div className="width-window">
          <div className="pad-left">
            <img className="grad" src="../assets/gradiente.png" />
          </div>
          <div className="centered">
            <img className="img-front" src="../assets/banner.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
