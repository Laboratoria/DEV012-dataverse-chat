import { navigateTo } from "../router.js";
export const apiKey = () => {
  const sectionApiKey = document.createElement("section");
  const divContenedorApiKey = document.createElement("div");
  const divCloseTitle = document.createElement("div");
  const divInput = document.createElement("div");
  const spanApiKey = document.createElement("span");
  const h2ApiKey = document.createElement("h2");
  const pApiKey = document.createElement("p");
  const inputApiKey = document.createElement("input");
  const btnApiKey = document.createElement("button");

  //clases para manipulación de estilos
  sectionApiKey.classList.add("section-modal");
  divContenedorApiKey.classList.add("div-contenedor-modal");
  divCloseTitle.classList.add("div-close-title");
  divInput.classList.add("div-input");
  spanApiKey.classList.add("span-close-modal");
  inputApiKey.classList.add("input-modal");
  btnApiKey.classList.add("btn-modal");

  //Se agregan los atributos necesarios a cada elemento
  inputApiKey.setAttribute("type", "text");
  inputApiKey.setAttribute("id", "inputModal");
  btnApiKey.setAttribute("type", "submit");

  //Texto de los elementos
  spanApiKey.textContent = "X";
  h2ApiKey.textContent = "API KEY";
  pApiKey.textContent = "Please, enter the corresponding key:";
  btnApiKey.textContent = "GO";

  //Agregar los hijos al padre
  divCloseTitle.appendChild(h2ApiKey);
  divCloseTitle.appendChild(spanApiKey);
  divInput.appendChild(pApiKey);
  divInput.appendChild(inputApiKey);
  divInput.appendChild(btnApiKey);

  //Agregar al contenedor padre
  divContenedorApiKey.appendChild(divCloseTitle);
  divContenedorApiKey.appendChild(divInput);
  sectionApiKey.appendChild(divContenedorApiKey);

  btnApiKey.addEventListener("click", () =>  {
    localStorage.setItem("key", inputApiKey.value)
    console.log("mostrando la apikey:", inputApiKey.value);
    navigateTo("/panel")
  })

  return sectionApiKey;
};
