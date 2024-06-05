import BarraNav from "../molecules/BarraNav";
import Card from "../atoms/Card";

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

      <section id="Mision&Vision" style={{ position: 'relative', textAlign: 'center' }}>
        <img
          src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: '100%', height: 'auto' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '70%',
            left: '0%',
            // transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            padding: '20px',
            borderRadius: '25px',
            display: 'flex',
            gap: '20px'
          }}
        >
          <Card title="Misión" text="Lorem ipsum dolor sit amet, eam natum animal in, eos nominavi lucilius no. Ex case possit audire quo. Rebum movet audiam in ius, ea case nemore praesent per, sea congue saperet ad. At pri discere atomorum philosophia. Has ignota integre ea. Has no commodo omittantur, te tantas partem quaestio vix. Sea id putent appareat senserit." />
          <Card title="Visión" text="Lorem ipsum dolor sit amet, eam natum animal in, eos nominavi lucilius no. Ex case possit audire quo. Rebum movet audiam in ius, ea case nemore praesent per, sea congue saperet ad. At pri discere atomorum philosophia. Has ignota integre ea. Has no commodo omittantur, te tantas partem quaestio vix. Sea id putent appareat senserit." />
        </div>
      </section>

      <section id="Contactanos">
        <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </section>
    </>
  );
}

export default Inicio;
