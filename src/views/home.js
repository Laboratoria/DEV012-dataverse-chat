import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { filterOrderBar } from "../components/filterOrderBar.js";
import { renderCards } from "../components/renderCards.js";
import { filterData } from "../lib/dataFunctions.js";
import data from "../data/data.js";

export const home = () => {
  let result = data;
  const homeView = document.createElement("div");
  homeView.className = "viewComponent";

  const filterOrderBarComponent = filterOrderBar();
  const headerComponent = header();
  const footerComponent = footer();
  const renderCardsComponent = renderCards(result);

  homeView.appendChild(headerComponent);
  homeView.appendChild(filterOrderBarComponent);
  homeView.appendChild(renderCardsComponent);
  homeView.appendChild(footerComponent);

  //eventos para funcionalidad de los filtros.

  const filterOrigin = homeView.querySelector('[data-testid="select-filterOrigin"]');

  filterOrigin.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterOrigin.value;
    const filteredOrigin = filterData(data, "seaOfOrigin", value);
    homeView.innerHTML = "";
    // filterCrew.value = "";
    // filterStatus.value = "";
    const filteredList = renderCards(filteredOrigin);
    homeView.appendChild(headerComponent);
    homeView.appendChild(filterOrderBarComponent);
    homeView.appendChild(filteredList);
    homeView.appendChild(footerComponent);
    result = filteredOrigin;
  });

  return homeView;
};
