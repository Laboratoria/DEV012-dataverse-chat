import { navigateTo} from "../router.js";

export const botonEnviar = () => {
  const contenedorBotonEnviar = document.createElement("div");
  const botonEnviarComponent = 
  document.createElement("button");
  botonEnviarComponent.setAttribute('id', "botonEnviar");
  botonEnviarComponent.textContent="Enviar";
  botonEnviarComponent.addEventListener('click', () => {
    navigateTo('/');
  })
  contenedorBotonEnviar.appendChild(botonEnviarComponent);
  return contenedorBotonEnviar;
};

