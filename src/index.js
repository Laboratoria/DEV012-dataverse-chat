// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { onURLChange, setRootElement, setRoutes, } from "./router.js";
import { home } from "./views/home.js"
import { error } from "./views/error.js"
import { details } from "./views/details.js";
import { facts } from "./views/facts.js";
import { panel } from "./views/panel.js";
import { apiConfig } from "./views/apiConfig.js";
import { luffyChatConfig } from "./lib/API.js";




//enlace con el root del HMTL
const viewContainer = document.getElementById("root");

//Definir rutas en router.
const routes = {
  "/": home,
  "/error": error,
  "/facts": facts,
  "/details": details,
  "/api": apiConfig,
  "/panel": panel
};


//Invocar el router para renderizar la vista correcta.
setRoutes(routes);

//Pasar "root element" a router.
setRootElement(viewContainer);



document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location);
});

document.addEventListener("popstate", (event) => {
  console.log('popstate', event)
  onURLChange(window.location);
});

luffyChatConfig().then((response) => {
  return response.json()
})
