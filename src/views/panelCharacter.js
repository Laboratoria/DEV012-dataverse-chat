import { chatContainer } from "../components/chatContainer.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { homeButtonApi } from "../components/homeButtonApi.js";
import { navigateTo } from "../router.js";


export const panelCharacter = (props) => {
  const characterId = props.id
  
  const headerComponent = header();
  const homeButtonComponent = homeButtonApi();
  const chatComponent = chatContainer(characterId);
  const footerComponent = footer();
  
  const viewPanel = document.createElement("div");
  viewPanel.className = "panelComponent"

  viewPanel.appendChild(headerComponent);
  viewPanel.appendChild(homeButtonComponent);
  viewPanel.appendChild(chatComponent);
  viewPanel.appendChild(footerComponent);

  
  const homeButtonEvent = viewPanel.querySelector(".home-btn")
  homeButtonEvent.addEventListener("click", () => navigateTo("/"));

  const apiConfigEvent = viewPanel.querySelector(".chat-api-button");
  apiConfigEvent.addEventListener("click", () => navigateTo("/api"));


  return viewPanel;

};
