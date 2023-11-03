import {footer} from "../components/footer.js"
import { header } from "../components/header.js";
import { filterOrderBar } from "../components/filterOrderBar.js";
import { renderCards } from "../components/renderCards.js";
import data from "../data/data.js";


export const home = () => {
  const homeView = document.createElement('div');
  homeView.className = "viewComponent";

  const filterOrderBarComponent = filterOrderBar();
  const headerComponent = header();
  const footerComponent = footer();
  const renderCardsComponent = renderCards(data);
  
  homeView.appendChild(headerComponent);
  homeView.appendChild(filterOrderBarComponent);
  homeView.appendChild(renderCardsComponent);
  homeView.appendChild(footerComponent);

  return homeView;
}