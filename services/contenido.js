import axios from "axios";

function cargarContenido({ setMision, setVision }) {
  cargarMision({ setMision });
  cargarVision({ setVision });
}

function cargarMision({ setMision }) {
  axios
    .get("https://backendaquaplus.onrender.com/obtenerMision")
    .then((res) => {
      setMision(res.data.contenido);
    });
}

function cargarVision({ setVision }) {
  axios
    .get("https://backendaquaplus.onrender.com/obtenerVision")
    .then((res) => {
      setVision(res.data.contenido);
    });
}

export { cargarContenido, cargarMision, cargarVision };
