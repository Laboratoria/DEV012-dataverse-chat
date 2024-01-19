import { navigateTo} from "../router.js";

export const botonApiKey = () => {
  const contenedorBoton = document.createElement("div");
  const botonApiKeyComponent = document.createElement("BUTTON");
  botonApiKeyComponent.setAttribute('id', "boton-api-key");
  botonApiKeyComponent.textContent="ApiKey";
  botonApiKeyComponent.addEventListener('click', () => {
    navigateTo('/apiKey');
  })
  contenedorBoton.appendChild(botonApiKeyComponent);
  return contenedorBoton;
};
