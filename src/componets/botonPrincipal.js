import { navigateTo} from "../router.js";

export const botonRegresar = () => {
  const contenedorBoton = document.createElement("div");
  const botonRegresarComponent = document.createElement("BUTTON");
  botonRegresarComponent.setAttribute('id', "botonRegresar");
  botonRegresarComponent.textContent="Regresar";
  botonRegresarComponent.addEventListener('click', () => {
    navigateTo('/');
  })
  contenedorBoton.appendChild(botonRegresarComponent);
  return contenedorBoton;
};
