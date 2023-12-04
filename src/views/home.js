import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { filterOrderBar } from "../components/filterOrderBar.js";
import { renderCards } from "../components/renderCards.js";
import { filterData, sortData, sortBounty } from "../lib/dataFunctions.js";
import data from "../data/data.js";
import { navigateTo } from "../router.js";
import { createBtnChat } from "../components/btnChat.js";

export const home = () => {
  const dataWithoutIdAll = data.filter(character => character.id !== "all");
  const homeView = document.createElement("div");
  homeView.className = "viewComponent";
  
  let result = dataWithoutIdAll;

  
  function setupRenderCards(cards) {
    const renderCardsComponent = renderCards(cards);
    // RenderCardsComponent es un elemento ul
    renderCardsComponent.addEventListener("click", (event) => {
      const closestLi = event.target.closest("li");
      if (closestLi) {
        // Click dentro de la tarjeta
        const characterId = closestLi.getAttribute("id");
        navigateTo("/details", { id: characterId });
      }
    });
    return renderCardsComponent;
  }

  //renderizado original del componente home

  const headerComponent = header();
  const filterOrderBarComponent = filterOrderBar();
  //  const renderCardsComponent = renderCards(result);
  const renderCardsComponent = setupRenderCards(dataWithoutIdAll);

  const footerComponent = footer();

  //función que agrupa el renderizado del header y el filterbarcomponent
  const headerFilterFunc = () => {
    homeView.appendChild(headerComponent);
    homeView.appendChild(filterOrderBarComponent);
  };

  //función que crea el botón de chat with me y h2 con info de la pagina.
  const subHeader = () => {
    
    const divBtnChat = document.createElement("div");
    divBtnChat.className = "h2-btn-chat"
    const h2 = document.createElement("h2");
    h2.textContent = "FIND MORE INFO OR TALK TO YOU FAVORITE PIRATE BY CLICKING THEM";
    const buttonChatHome = createBtnChat("all", "CHAT WITH ALL");
    //renderizado divBtnChat
    divBtnChat.appendChild(h2);
    divBtnChat.appendChild(buttonChatHome);

    return divBtnChat;

  } 



  //renderizado de home original
  headerFilterFunc();
  homeView.appendChild(subHeader());
  homeView.appendChild(renderCardsComponent);
  homeView.appendChild(footerComponent);

  //llamado de selectores para interacción con eventos
  const filterOrigin = homeView.querySelector(
    '[data-testid="select-filterOrigin"]'
  );
  const filterCrew = homeView.querySelector('[data-testid="select-filter"]');
  const filterStatus = homeView.querySelector(
    '[data-testid="select-filterStatus"]'
  );
  const sortName = homeView.querySelector('[data-testid="select-sort"]');
  const sortedBounty = homeView.querySelector('[data-testid="select-bounty"]');
  const clearButton = homeView.querySelector('[data-testid="button-clear"]');
  const factsButton = homeView.querySelector("#facts");

  //eventos para funcionalidad de los filtros.

  filterOrigin.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterOrigin.value;
    const filteredOrigin = filterData(dataWithoutIdAll, "seaOfOrigin", value);
    homeView.innerHTML = "";
    filterCrew.value = "";
    filterStatus.value = "";
    result = filteredOrigin;
    const filteredList = setupRenderCards(result);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(subHeader());
    homeView.appendChild(filteredList);
    homeView.appendChild(footerComponent);
  });

  filterCrew.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterCrew.value;
    const filteredCrew = filterData(dataWithoutIdAll, "crewOrigin", value);
    homeView.innerHTML = "";
    filterOrigin.value = "";
    filterStatus.value = "";
    result = filteredCrew;
    const filteredList = setupRenderCards(result);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(subHeader());
    homeView.appendChild(filteredList);
    homeView.appendChild(footerComponent);
  });

  filterStatus.addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterStatus.value;
    const filteredStatus = filterData(dataWithoutIdAll, "status", value);
    homeView.innerHTML = "";
    filterOrigin.value = "";
    filterCrew.value = "";
    result = filteredStatus;
    const filteredList = setupRenderCards(result);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(subHeader());
    homeView.appendChild(filteredList);
    homeView.appendChild(footerComponent);
  });

  sortName.addEventListener("change", (e) => {
    e.preventDefault();
    const sortOrder = sortName.value;
    const sortedName = sortData(result, "name", sortOrder);
    homeView.innerHTML = "";
    sortedBounty.value = "";
    const sortedList = setupRenderCards(sortedName);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(subHeader());
    homeView.appendChild(sortedList);
    homeView.appendChild(footerComponent);
  });

  sortedBounty.addEventListener("change", (e) => {
    e.preventDefault();
    const sortOrder = sortedBounty.value;
    const sortedResultBounty = sortBounty(result, sortOrder);
    homeView.innerHTML = "";
    sortName.value = "";
    const sortedList = setupRenderCards(sortedResultBounty);
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(subHeader());
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
    result = dataWithoutIdAll;
    //renderizamos componentes del home junto a la función que llama el evento
    headerFilterFunc();
    homeView.appendChild(subHeader());
    homeView.appendChild(setupRenderCards(result));
    homeView.appendChild(footerComponent);
  });

  factsButton.addEventListener("click", () => navigateTo("/facts"));

  return homeView;
};
