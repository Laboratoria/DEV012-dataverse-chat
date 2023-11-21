
import { renderHome } from "./views/home.js";

import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { error } from "./views/error.js";
import { renderStats } from "./views/facts.js";
import { renderCharacters} from "./views/detalle.js";
import { renderEveryone } from "./views/everyoneChat.js";
import { renderApiKey } from "./apiKey.js";
import dataset from "./data/dataset.js";


const routes = { "/": renderHome,
 "/facts": renderStats,
 "/error": error,
 "/panel": renderEveryone,
 "/api-key": renderApiKey,

};

dataset.forEach((element) => {
  routes[`/detalle-${element.id}`] = renderCharacters;
});

const rootRender = document.querySelector("#root");
setRoutes(routes);
setRootElement(rootRender);

const charactersTitle = document.querySelector("h2");
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("sitio cargado");
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
});

