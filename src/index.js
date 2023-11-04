// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
// import data from "./data/data.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import {home} from "./views/home.js"
import {error} from "./views/error.js"
// import { filterData,sortData,sortBounty,computeStats,computeStatsBounty} from "./lib/dataFunctions.js";
// import { renderCards } from "./components/renderCards.js";

// let result = data;
//enlace con el root del HMTL
const viewContainer = document.getElementById("root");
// const factsButton = document.getElementById("facts");
// const charactersTitle = document.querySelector("h2");

//Definir rutas en router.
const routes = {
  "/": home,
  "/error": error,
};


//Invocar el router para renderizar la vista correcta.
setRoutes(routes);

//Pasar "root element" a router.
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
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
