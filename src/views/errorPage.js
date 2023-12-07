import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

export const errorPage = () => {
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(createErrorMessage());
  section.appendChild(footer());
  return section;
};

export const createErrorMessage = () => {
  const errorMessageHTML = `<h2>Page not found</h2>`; //template string
  const nodoErrorElement = document.createElement("h2"); //Nodo
  nodoErrorElement.innerHTML = errorMessageHTML;
  nodoErrorElement.classList.add("errorHeading");

  return nodoErrorElement;
};
