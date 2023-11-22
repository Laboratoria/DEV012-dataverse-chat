import { chatContainer } from "../components/chatContainer.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { homeButton } from "../components/homeButton.js";
import { navigateTo } from "../router.js";


export const panel = () => {
  const headerComponent = header();
  const homeButtonComponent = homeButton();
  const chatComponent = chatContainer();
  const footerComponent = footer();
  
  const viewPanel = document.createElement("div");
  viewPanel.className = "panelComponent"

  viewPanel.appendChild(headerComponent);
  viewPanel.appendChild(homeButtonComponent);
  viewPanel.appendChild(chatComponent);
  viewPanel.appendChild(footerComponent);

  
  const homeButtonEvent = viewPanel.querySelector(".home-btn")
  homeButtonEvent.addEventListener("click", () => navigateTo("/"));


  return viewPanel;

};
