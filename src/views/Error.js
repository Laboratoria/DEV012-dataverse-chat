import { botonRegresar} from "../componets/botonPrincipal.js";

export const error = () => {
  const errorView = document.createElement("section");
  const pantallaError = `
        <div class="contenedorFlex" id="mensajeError">
          <p>Página no encontrada</p>
          <p>Lo sentimos, al parecer esta parte del arcade no está funcionando.</p>
          <p>Por favor regresa a la página principal para seguir disfrutando.</p>
          
        </div>`;
  errorView.innerHTML = pantallaError;
  errorView.appendChild(botonRegresar());

  errorView.setAttribute('id', 'error-page');
 
  return errorView;
};