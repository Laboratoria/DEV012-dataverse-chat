export const error = () => {
  const errorView = document.createElement("section");
  const pantallaError = `
  <button data-testid="boton-regresar" name="boton-regresar" id="botonRegresar">Regresar</button>
        <div class="contenedorFlex" id="mensajeError">
          <p>Página no encontrada</p>
          <p>Lo sentimos, al parecer esta parte del arcade no está funcionando.</p>
          <p>Por favor regresa a la página principal para seguir disfrutando.</p>
          
        </div>`;
  errorView.innerHTML = pantallaError;

  document.body.style.backgroundImage = 'url("https://raw.githubusercontent.com/Passitaz/DEV012-dataverse-chat/main/Pantalla%20de%20error.png")';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
 
  return errorView;
};