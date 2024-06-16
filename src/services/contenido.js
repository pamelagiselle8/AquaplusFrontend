import axios from "axios";
const URL = "https://backendaquaplus.onrender.com/";

async function cargarContenido({ setContenido }) {
  await axios.get(URL + "getInformacionPagina").then((res) => {
    setContenido(res.data.arr[0]);
  });
}

export { cargarContenido };
