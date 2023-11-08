import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { homeButton } from "../components/homeButton.js";
import { renderDetails } from "../components/renderChrDetails.js";

export const details = () => {
  const detailsView = document.createElement("div");
  detailsView.className = "descriptionComponent";

  const headerComponent = header();
  const homeButtonComponent = homeButton();
  const renderCharacterComponent = renderDetails();
  const footerComponent = footer();

  detailsView.appendChild(headerComponent);
  detailsView.appendChild(homeButtonComponent);
  detailsView.appendChild(renderCharacterComponent);
  detailsView.appendChild(footerComponent);
  

  return detailsView;

};
