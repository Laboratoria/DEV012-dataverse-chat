import { navigateTo } from "../router.js";
import { checkAPIKey } from "../lib/API.js";
export const apiKey = (props) => {
  const pathToNavigate = props.pathToNavigate;
  const propsToNavigate = props.propsToNavigate;
  const sectionApiKey = document.createElement("section");
  const divContenedorApiKey = document.createElement("div");
  const divCloseTitle = document.createElement("div");
  const divInput = document.createElement("div");
  const h2ApiKey = document.createElement("h2");
  const pApiKey = document.createElement("p");
  const inputApiKey = document.createElement("input");
  const btnApiKey = document.createElement("button");
  const btnDeleteApiKey = document.createElement("button");

  //clases para manipulación de estilos
  sectionApiKey.classList.add("section-modal");
  divContenedorApiKey.classList.add("div-contenedor-modal");
  divCloseTitle.classList.add("div-close-title");
  divInput.classList.add("div-input");
  inputApiKey.classList.add("input-modal");
  btnApiKey.classList.add("btn-modal");
  btnDeleteApiKey.classList.add("btn-modal");

  //Se agregan los atributos necesarios a cada elemento
  inputApiKey.setAttribute("type", "text");
  inputApiKey.setAttribute("id", "inputModal");
  inputApiKey.setAttribute("minlength", "49");
  inputApiKey.setAttribute("maxlength", "60");
  btnApiKey.setAttribute("type", "submit");
  btnDeleteApiKey.setAttribute("type", "button");

  //Texto de los elementos
  h2ApiKey.textContent = "API KEY";
  pApiKey.textContent = "Please, enter the corresponding key:";
  btnApiKey.textContent = "GO";
  btnDeleteApiKey.textContent = "DELETE";

  //Agregar los hijos al padre
  divCloseTitle.appendChild(h2ApiKey);
  divInput.appendChild(pApiKey);
  divInput.appendChild(inputApiKey);
  divInput.appendChild(btnApiKey);
  divInput.appendChild(btnDeleteApiKey);

  //Agregar al contenedor padre
  divContenedorApiKey.appendChild(divCloseTitle);
  divContenedorApiKey.appendChild(divInput);
  sectionApiKey.appendChild(divContenedorApiKey);

  btnDeleteApiKey.addEventListener("click", () => {
    localStorage.removeItem("key");
  });

  btnDeleteApiKey.addEventListener("click", () => {
    localStorage.removeItem("key");
  });

  btnApiKey.addEventListener("click", () => {
    checkAPIKey(inputApiKey.value)
      .then(() => {
        localStorage.setItem("key", inputApiKey.value);
        if (pathToNavigate && propsToNavigate)
          navigateTo(pathToNavigate, propsToNavigate);
      })
      .catch((error) => {
        alert("Error al verificar la API Key: " + error);
      });
  });

  return sectionApiKey;
};
