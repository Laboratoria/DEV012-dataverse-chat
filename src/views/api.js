export const api = () => {
    const apiKeyView = document.createElement("section");
    const pantallaApiKey  = `
    <button data-testid="boton-regresar" name="boton-regresar" id="botonRegresar">Regresar</button>
    <div class="contenedorApiKey" id="ingreso">
      <p> Api Key Admin <br>
       Desde aquí puedes administrar la API Key a utilizar</p>
    </div>
    <div>
    <textarea id="apiTex" name="Api" rows="4" cols="50" placeholder="API KEY" class="apiText"></textarea>
    <button data-testid="boton-enviar" name="boton-enviar" id="enviar">Enviar</button></div>`;
    apiKeyView.innerHTML = pantallaApiKey;

    return apiKeyView;
}
