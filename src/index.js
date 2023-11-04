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
// viewContainer.appendChild(renderCards(result));
// const sortName = document.querySelector('[data-testid="select-sort"]');
// const sortedBounty = document.querySelector('[data-testid="select-bounty"]');
// const filterOrigin = document.querySelector(
//   '[data-testid="select-filterOrigin"]'
// );
// const filterCrew = document.querySelector('[data-testid="select-filter"]');
// const filterStatus = document.querySelector(
//   '[data-testid="select-filterStatus"]'
// );
// const clearButton = document.querySelector('[data-testid="button-clear"]');
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

// filterOrigin.addEventListener("change", (e) => {
//   e.preventDefault();
//   const value = filterOrigin.value;
//   console.log(value);
//   const filteredOrigin = filterData(data, "seaOfOrigin", value);
//   viewContainer.innerHTML = "";
//   filterCrew.value = "";
//   filterStatus.value = "";
//   const filteredList = renderCards(filteredOrigin);
//   viewContainer.appendChild(filteredList);
//   result = filteredOrigin;
// });
// filterCrew.addEventListener("change", (e) => {
//   e.preventDefault();
//   const value = filterCrew.value;
//   const filteredCrew = filterData(data, "crewOrigin", value);
//   viewContainer.innerHTML = "";
//   filterOrigin.value = "";
//   filterStatus.value = "";
//   const filteredList = renderCards(filteredCrew);
//   viewContainer.appendChild(filteredList);
//   result = filteredCrew;
// });
// filterStatus.addEventListener("change", (e) => {
//   e.preventDefault();
//   const value = filterStatus.value;
//   const filteredStatus = filterData(data, "status", value);
//   viewContainer.innerHTML = "";
//   filterOrigin.value = "";
//   filterCrew.value = "";
//   const filteredList = renderCards(filteredStatus);
//   viewContainer.appendChild(filteredList);
//   result = filteredStatus;
// });
// sortName.addEventListener("change", (e) => {
//   e.preventDefault();
//   const sortOrder = sortName.value;
//   const sortedName = sortData(result, "name", sortOrder);
//   viewContainer.innerHTML = "";
//   sortedBounty.value = "";
//   const sortedList = renderCards(sortedName);
//   viewContainer.appendChild(sortedList);
// }
// );
// sortedBounty.addEventListener("change", (e) => {
//   e.preventDefault();
//   const sortOrder = sortedBounty.value;
//   const sortedResultBounty = sortBounty(result, sortOrder)
//   viewContainer.innerHTML = "";
//   sortName.value = "";
//   const sortedList = renderCards(sortedResultBounty);
//   viewContainer.appendChild(sortedList);
// });
// clearButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   filterOrigin.value = "";
//   filterCrew.value = "";
//   filterStatus.value = "";
//   sortName.value = "";
//   sortedBounty.value = "";
//   viewContainer.innerHTML = "";
//   viewContainer.appendChild(renderCards(data));
//   result = data;
// });
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
