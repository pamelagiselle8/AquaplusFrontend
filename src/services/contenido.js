import axios from "axios";
const API_URL = "https://backendaquaplus.onrender.com/";

async function cargarContenido() {
  try {
    let data;
    await axios.get(API_URL + "getInformacionPagina").then((res) => {
      data = res.data.arr[0];
    });
    return data;
  } catch (error) {
    console.error("Error al cargar el contenido", error);
  }
}

async function editarContenido({ contenido, setContenido }) {
  console.log("contenido editar: ", contenido);
  const data = {
    sobreNosotros: "",
    contentMision: "",
    contentVision: "",
    imgVision: "",
    imgMision: "",
    usuarioIg: "",
    usuarioFb: "",
  };
  Object.keys(contenido).forEach((key) => {
    if (contenido[key]) {
      data[key] = contenido[key];
    }
  });

  try {
    await axios
      .put(API_URL + "modificarPaginaInform", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        const fetchData = async () => {
          const data = await cargarContenido();
          setContenido(data);
        };
        window.location.replace("/");
        console.log("Contenido editado exitosamente");
      });
  } catch (error) {
    console.error("Error al editar el contenido", error);
  }
}

export { cargarContenido, editarContenido };
