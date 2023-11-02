// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { onURLChange, setRootElement, setRoutes } from "./router.js";
import {home} from "./views/home.js"
import {error} from "./views/error.js"

const routes = {
  "/": home,
  "/error": error,
};

//enlace con el root del HMTL
const viewContainer = document.getElementById("root");

setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
