// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { onURLChange, setRootElement, setRoutes, } from "./router.js";
import { home } from "./views/home.js"
import { error } from "./views/error.js"
import { details } from "./views/details.js";
import { facts } from "./views/facts.js";
import { panel } from "./views/panel.js";
import { apiConfig } from "./views/apiConfig.js";




//enlace con el root del HMTL
const viewContainer = document.getElementById("root");
// const factsButton = document.getElementById("facts");
// const charactersTitle = document.querySelector("h2");

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


//eventos para funcionalidad de los filtros.





// factsButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   viewContainer.innerHTML = "";
//   charactersTitle.innerHTML = "Facts"
//   //viewContainer.appendChild(renderStats()); acá va el renderizado de las estadisticas (hay que hacer  el componente)
//   const origen = document.querySelector("#idOrigin");
//   origen.textContent = "Did you know that " + computeStats(data, "seaOfOrigin", "East Blue") + "% of the characters come from East Blue.";
//   const crew = document.querySelector("#idCrew");
//   crew.textContent = "Did you know that " + computeStats(data, "crewOrigin", "Straw Hat Pirates") + "% of the characters are from Luffy's crew (Straw Hat Pirates)."
//   const bounty = document.querySelector("#idBounty");
//   bounty.textContent = "Did you know that " + computeStatsBounty(data, "bounty", 315000000) + "% of the characters have a bounty over 315,000,000."
// });
