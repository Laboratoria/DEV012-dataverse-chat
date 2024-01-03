import data from "../data/dataset.js";
import { renderItems } from "../componets/tarjetas.js";
import { footer } from "../componets/footer.js";
import { header } from "../componets/header.js";
import { vistaFiltro } from "../componets/filtros.js";
import { filtrosT } from "../lib/dataFunctions.js";
import { estadisticaJuegos } from "../componets/estadistica.js";

let newData = data.slice();

export const Home = () => {
  const divHome = document.createElement('div');
  divHome.setAttribute('id', 'vistaHome');
  
  const homeView = document.createElement("section");
  homeView.innerHTML = header() + vistaFiltro();

  const estadisticasElemento = estadisticaJuegos();
  const contenedorEstadisticas = homeView.querySelector('#contenedor-2'); 
  contenedorEstadisticas.appendChild(estadisticasElemento);


  const itemsDiv = document.createElement('div');
  itemsDiv.setAttribute('id', 'itemsDiv');
  homeView.appendChild(itemsDiv);

  const homeFooter = document.createElement("section");
  homeFooter.innerHTML = footer();
  homeView.appendChild(homeFooter);

  divHome.appendChild(homeView);

  function agregarEventosFiltros() {
    const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
    const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]');
    const ordenaAZ = document.querySelector('[id="ordenar-por"]');

    filtrarGenero.addEventListener("change", aplicarFiltros);
    filtrarPOV.addEventListener("change", aplicarFiltros);
    ordenaAZ.addEventListener("change", aplicarFiltros);
  }

  function aplicarFiltros() {
    const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
    const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]');
    const ordenaAZ = document.querySelector('[id="ordenar-por"]');

    const indice = filtrarGenero.selectedIndex;
    const optionSelect = filtrarGenero.options[indice];
    const indicePov = filtrarPOV.selectedIndex;
    const optionSelectPOV = filtrarPOV.options[indicePov];
    const indiceOrdenar = ordenaAZ.selectedIndex;
    const ordenar = ordenaAZ.options[indiceOrdenar];
    itemsDiv.innerHTML = "";

    const dataFiltrada = filtrosT(data, optionSelect.value, optionSelectPOV.value, ordenar.value);
    itemsDiv.appendChild(renderItems(dataFiltrada)); 
  }

  const boton = divHome.querySelector('[data-testid="restablecerFiltros"]');
  boton.addEventListener("click", limpiar);

  function limpiar() {
    const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
    const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]');
    const ordenaAZ = document.querySelector('[id="ordenar-por"]');
    
    filtrarGenero.value = 'nada';
    filtrarPOV.value = 'nada';
    ordenaAZ.value = 'nada';
    itemsDiv.innerHTML = "";
    itemsDiv.appendChild(renderItems(newData));
  }

  const boton2 = divHome.querySelector('[data-testid="botonChatGrupal"]');
  boton2.addEventListener("click", abrir);

  function abrir() {
    alert("Hola");
  }

  document.body.appendChild(divHome);
  agregarEventosFiltros();
  aplicarFiltros();

  return divHome;
};
//



