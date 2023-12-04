// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { onURLChange, setRootElement, setRoutes, } from "./router.js";
import { home } from "./views/home.js"
import { error } from "./views/error.js"
import { details } from "./views/details.js";
import { facts } from "./views/facts.js";
import { panelCharacter } from "./views/panelCharacter.js";
import { apiConfig } from "./views/apiConfig.js";

//enlace con el root del HMTL
const viewContainer = document.getElementById("root");

//Definir rutas en router.
const routes = {
  "/": { component: home, title: "One Pedia | Home" },
  "/error": { component: error, title: "One Pedia | Error" },
  "/facts": { component: facts, title: "One Pedia | Facts" },
  "/details": { component: details, title: "One Pedia | Details" },
  "/api": { component: apiConfig, title: "One Pedia | API Configuration" },
  "/panelChr": { component: panelCharacter, title: "One Pedia | Chat" },
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

