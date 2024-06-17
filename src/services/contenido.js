import axios from "axios";
const URL = "https://backendaquaplus.onrender.com/";

async function cargarContenido({ setContenido }) {
  await axios.get(URL + "getInformacionPagina").then((res) => {
    setContenido(res.data.arr[0]);
  });
}

async function editarContenido({ contenido, setContenido }) {
  const data = new contenido();
  console.log("contenido editar: ", contenido);
  Object.keys(contenido).forEach((key) => {
    if (contenido[key]) {
      data.append(key, contenido[key]);
    }
  });

  try {
    await axios
      .put(URL + "modificarPaginaInform", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("Contenido editado exitosamente");
        cargarContenido({ setContenido });
      });
  } catch (error) {
    console.error("Error al editar el contenido", error);
  }
}

export { cargarContenido };
