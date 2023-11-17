import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { homeButton } from "../components/homeButton.js";
import { renderDetails } from "../components/renderChrDetails.js";
import { navigateTo } from "../router.js";
import { getCharacterById } from "../lib/dataFunctions.js";

export const details = (props) => {
  const characterId = props.id

  const detailsView = document.createElement("div");
  detailsView.className = "viewComponent";

  const headerComponent = header();
  const homeButtonComponent = homeButton();
  
  const character = getCharacterById(characterId)

  const renderCharacterComponent = renderDetails(character);
  const footerComponent = footer();

  detailsView.appendChild(headerComponent);
  detailsView.appendChild(homeButtonComponent);
  detailsView.appendChild(renderCharacterComponent);
  detailsView.appendChild(footerComponent);
  
  const homeButtonEvent = detailsView.querySelector(".home-btn")
  homeButtonEvent.addEventListener("click", () => navigateTo("/"));

  return detailsView;

};
