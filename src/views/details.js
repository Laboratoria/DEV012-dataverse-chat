import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

export const details = () => {
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(createDetailsMessage());
  section.appendChild(footer());
  return section;
};

export const createDetailsMessage = () => {
  const detailsMessageHTML = `<h3>Conoce más acerca de esta película y sumérgete en detalles 
  fascinantes a través de nuestro amigable chat.</h3>`; //template string
  const nodoDetailsElement = document.createElement("h3"); //Nodo
  nodoDetailsElement.innerHTML = detailsMessageHTML;
  nodoDetailsElement.classList.add("detailsHeading");

  return nodoDetailsElement;
};
