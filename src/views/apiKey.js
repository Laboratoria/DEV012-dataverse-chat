import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

export const apiKey = () => {
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(createApiKeyMessage());
  section.appendChild(footer());
  return section;
};

export const createApiKeyMessage = () => {
  const apiKeyMessageHTML = `<h2>Ingresa tu API Key</h2>`; //template string
  const nodoApiKeyElement = document.createElement("h2"); //Nodo
  nodoApiKeyElement.innerHTML = apiKeyMessageHTML;
  nodoApiKeyElement.classList.add("apiHeading");

  return nodoApiKeyElement;
};
