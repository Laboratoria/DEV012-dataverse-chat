import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { filterOrderBar } from "../components/filterOrderBar.js";
import { renderCards } from "../components/renderCards.js";
import { filterData, sortData, sortBounty } from "../lib/dataFunctions.js";
import data from "../data/data.js";
import { navigateTo } from "../router.js";

export const home = () => {
  let result = data;
  const homeView = document.createElement("div");
  homeView.className = "viewComponent";

  //renderizado original del componente home

  const headerComponent = header();
  const filterOrderBarComponent = filterOrderBar();
  const renderCardsComponent = renderCards(result);
  const footerComponent = footer();

  //función que agrupa el renderizado del header y el filterbarcomponent
  const headerFilterFunc = () => {
    homeView.appendChild(headerComponent);
    homeView.appendChild(filterOrderBarComponent);
  };

  //renderizado de home original
  headerFilterFunc();
  homeView.appendChild(renderCardsComponent);
  homeView.appendChild(footerComponent);

  //llamado de selectores para interacción con eventos
  const filterOrigin = homeView.querySelector(
    '[data-testid="select-filterOrigin"]'
  );
  const filterCrew = homeView.querySelector('[data-testid="select-filter"]');
  const filterStatus = homeView.querySelector('[data-testid="select-filterStatus"]');
  const sortName = homeView.querySelector('[data-testid="select-sort"]');
  const sortedBounty = homeView.querySelector('[data-testid="select-bounty"]');
  const clearButton = homeView.querySelector('[data-testid="button-clear"]');
  const factsButton = homeView.querySelector("#facts")


  //eventos para funcionalidad de los filtros.


  filterOrigin.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterOrigin.value;
    const filteredOrigin = filterData(data, "seaOfOrigin", value);
    homeView.innerHTML = "";
    filterCrew.value = "";
    filterStatus.value = "";
    const filteredList = renderCards(filteredOrigin);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(filteredList);
    homeView.appendChild(footerComponent);
    result = filteredOrigin;
  });

  filterCrew.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterCrew.value;
    const filteredCrew = filterData(data, "crewOrigin", value);
    homeView.innerHTML = "";
    filterOrigin.value = "";
    filterStatus.value = "";
    const filteredList = renderCards(filteredCrew);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(filteredList);
    homeView.appendChild(footerComponent);
    result = filteredCrew;
  });

  filterStatus.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterStatus.value;
    const filteredStatus = filterData(data, "status", value);
    homeView.innerHTML = "";
    filterOrigin.value = "";
    filterCrew.value = "";
    const filteredList = renderCards(filteredStatus);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(filteredList);
    homeView.appendChild(footerComponent);
    result = filteredStatus;
  });

  sortName.addEventListener("change", (e) => {
    e.preventDefault();
    const sortOrder = sortName.value;
    const sortedName = sortData(result, "name", sortOrder);
    homeView.innerHTML = "";
    sortedBounty.value = "";
    const sortedList = renderCards(sortedName);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(sortedList);
    homeView.appendChild(footerComponent);
  });

  sortedBounty.addEventListener("change", (e) => {
    e.preventDefault();
    const sortOrder = sortedBounty.value;
    const sortedResultBounty = sortBounty(result, sortOrder);
    homeView.innerHTML = "";
    sortName.value = "";
    const sortedList = renderCards(sortedResultBounty);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(sortedList);
    homeView.appendChild(footerComponent);
  });

  clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    homeView.innerHTML = "";
    filterOrigin.value = "";
    filterCrew.value = "";
    filterStatus.value = "";
    sortName.value = "";
    sortedBounty.value = "";
    result = data;
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(renderCards(result));
    homeView.appendChild(footerComponent);
  });

  factsButton.addEventListener("click", () => navigateTo("/facts"));

  return homeView;

};
