import BarraNav from "../molecules/BarraNav";

function Inicio() {
  return (
    <>
      <BarraNav />
      <section id="hero-section">
        <div id="hero" className="width-window">
          <div className="pad-left">
            <img className="grad" src="../assets/gradiente.png" />
          </div>
          <div className="centered">
            <img className="img-front" src="../assets/banner.png" />
          </div>
        </div>
      </section>
      <section id="contacto-section">
        <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </section>
    </>
  );
}

export default Inicio;
