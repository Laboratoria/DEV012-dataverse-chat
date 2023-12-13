import { header } from "../components/header.js";
import { navBar } from "../components/nav.js";
import { footer } from "../components/footer.js";
import data from "/data/dataset.js";

// Crearlos como componente (opcional)
const renderData = (data) => {
  //el ciclo es independiente del html
  let htmlCards = "";
  const nodoCards = document.createElement("ul"); // Crea el Nodo
  data.forEach((items) => {
    htmlCards += `<li itemscope itemtype="PeliculasAnimacionJaponesa" class="itemcontainer" data-id="${items.id}">
                <dl itemscope itemtype="PeliculasAnimacionJaponesa">
                <img src="${items.imageUrl}" alt="${items.name}"/>
                <div class="texto">
                <dt></dt><dd itemprop="studio">${items.facts.studio}</dd>
                <dt></dt><dd itemprop="name">${items.name}</dd>
                <dt></dt><dd itemprop="shortDescription">${items.shortDescription}</dd>
                <dt></dt><dd itemprop="genre">${items.facts.genre}</dd>
                <dt></dt><dd itemprop="year">${items.facts.year}</dd>
                </div>
              </dl>
            </li>`; //template string
  });
  nodoCards.innerHTML = htmlCards; // Convierte el string en un HTML
  return nodoCards;
};

export const home = () => {
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(navBar());
  section.appendChild(renderData(data));
  section.appendChild(footer());
};
