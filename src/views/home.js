import data from "../data/dataset.js";
import {filterAffiliation,  sortData, computeStats,} from "../lib/dataFunctions.js";
import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import { listItems } from "../components/listItems.js";
import { NavBar } from "../components/navBar.js";

export const Home = () => {
  let currentData = data;
  const divContainerHome = document.createElement("div"); //se crea una sección para contener Home
  const ul = document.createElement("ul");
  ul.id = "ul";
  const nodesCreated = listItems(data);

  nodesCreated.forEach((element) => {
    ul.append(element);
  });

  //se llaman componentes
  //const headerComponent = Header();
  //se reemplazan las const en la línea 16 que llaman a los componentes de listItems, Header y Footer. Se usa append, en lugar de appendChild para llamar a todos

  //se agregan los componentes al contenedor de toda la vista Home
  console.log(ul);
  divContainerHome.append(Header(), NavBar(), ul, Footer());

  //Filtrado
  const optionFilter = divContainerHome.querySelector('[name="affiliation"]');
  optionFilter.addEventListener("change", (event) => {
    currentData = filterAffiliation(data, event.target.value);
    const ul = divContainerHome.querySelector("#ul");
    ul.innerHTML = "";
    const nodesCreated = listItems(currentData);

    nodesCreated.forEach((element) => {
      ul.append(element);
    });
    console.log(currentData.length);
  });

  //Ordenamiento

  //const optionSort = divContainerHome.querySelector('[name="sortAZ"]');
  //optionSort.addEventListener("change",function(event) => {
  //const sortedData = sortData (data, event.target.value);

  //// Sección ordenar
  const optionSort = divContainerHome.querySelector('[name="sortAZ"]');

  // Evento para cambiar el orden
  optionSort.addEventListener("change", function (event) {
    const sortBy = event.target.value;
console.log (sortBy," sortBy")
    // ordena la data filtrada o la que ya se encuentra por default
   // const dataToSort = selectedAffiliation
   //   ? filterAffiliation(data, selectedAffiliation)
   //   : data;
    const sortedData = sortData(currentData, sortBy);
    console.log (sortedData, "")
    const nodesCreated = listItems(sortedData);
    ul.innerHTML = "";

  nodesCreated.forEach((element) => {
    ul.append(element);
    
  });
  });

  const clearButton = divContainerHome.querySelector('[data-testid="button-clear"]');
  clearButton.addEventListener("click", () => {
  //ul.innerHTML = "";
  ul.innerHTML = listItems(data);
});

  return divContainerHome;

 
};

//sortBy = event.target.value;

/*
//Manipulación de eventos
// Sección renderizador tarjetas
const cardsContainer = document.getElementById("root")
cardsContainer.appendChild(listItems(data));

// Sección filtro
const optionFilter = document.querySelector('[name="affiliation"]');
const clearButton = document.querySelector("#clearBtn"); 
let selectedAffiliation = "";

// Función actualizar filtro
const updateFilter = () => {
  // Filtrar data y renderizar tarjetas de nuevo
  const filteredData = filterAffiliation(data, selectedAffiliation);
  
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(filteredData));

  // actializa estádísticas del filtrado
  const statsElement = document.querySelector("#statsFilter");
  const statsResult = computeStats(filteredData);
  
  const totalCount = Object.values(statsResult).reduce((total, count) => total + count, 0);

  // establece el contenido del HTML
  statsElement.innerHTML = `Total characters: ${totalCount}`;
};

// Evento para cambiar el filtro
optionFilter.addEventListener("change", (event) => {
  selectedAffiliation = event.target.value;
  updateFilter();
});

/// Sección botón de limpiar
clearButton.addEventListener("click", () => {
  selectedAffiliation = "";

  // Reestablece Afiliación
  optionFilter.value = "• Select Affiliation •";
  updateFilter();

  // Reestablece orden
  optionSort.value = "• Select Order •";
  sortBy = ""; // Reset the sorting option
  const sortedData = sortData(data, sortBy);

  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(sortedData));
});
//// Sección ordenar
const optionSort = document.querySelector('[name="sortAZ"]');
let sortBy = "";

// Evento para cambiar el orden
optionSort.addEventListener("change", function (event) {
  sortBy = event.target.value;

  // ordena la data filtrada o la que ya se encuentra por default
  const dataToSort = selectedAffiliation ? filterAffiliation(data, selectedAffiliation) : data;
  const sortedData = sortData(dataToSort, sortBy);

  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(sortedData));
});

//// Sección estadística
const statsElement = document.querySelector("#statsFilter");
const filteredData = filterAffiliation(data, selectedAffiliation);
const statsResult = computeStats(filteredData);

// obtiene total de personajes
const totalCount = Object.values(statsResult).reduce((total, count) => total + count, 0);

// contenido del HTML
statsElement.innerHTML = "Total characters: " + totalCount;

// Evento para limpiar el filtro
clearButton.addEventListener("click", updateFilter);

//console.log(example, renderItems(data), data);
*/
