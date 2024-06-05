import BarraNav from "../molecules/BarraNav";
import Card from "../atoms/Card";
import { useEffect, useState } from "react";
import axios from "axios";


function Inicio() {

  const [mision, setMision] = useState('');
  const [vision, setVision] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3002/obtenerMision')
    .then((res) => {
      setMision(res.data.contenido);
    })

    console.log("mision: ",mision);

    axios.get('http://localhost:3002/obtenerVision')
    .then((res) => {
      setVision(res.data.contenido);
    })

    console.log("vision: ",vision);
  }, []);

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
            position: 'absolute', top: '70%', left: '2%', right: '2%',
            backgroundColor: 'rgba(255, 255, 255, 0.4)', justifyContent: 'center',
            padding: '20px', borderRadius: '25px', display: 'flex', gap: '20px'
          }}
        >
          <Card title="Misión" text={mision} />
          <Card title="Visión" text={vision} />
        </div>
      </section>

      <section id="Contactanos">
        <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </section>
    </>
  );
}

export default Inicio;