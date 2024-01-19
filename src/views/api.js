import { botonRegresar } from "../componets/botonPrincipal.js";
import { botonEnviar } from "../componets/botonEnviar.js";

export const api = () => {
  const apiKeyView = document.createElement("section");
  const pantallaApiKey = `
    <div class="contenedorApiKey" id="ingreso">
      <p> Api Key Admin <br>
       Desde aquí puedes administrar la API Key a utilizar</p>
    </div>`
  const apiText = document.createElement('div');
  apiText.innerHTML = `<textarea id="apiTex" name="Api" rows="4" cols="50" placeholder="API KEY" class="apiText"></textarea>`;
  apiKeyView.innerHTML = pantallaApiKey;

  apiText.appendChild(botonEnviar());
  apiText.querySelector('#botonEnviar').addEventListener('click', () => {

    localStorage.setItem('apikey', apiText.querySelector('textarea[name="Api"]').value);
  })
  apiKeyView.appendChild(apiText);
  apiKeyView.appendChild(botonRegresar());



  return apiKeyView;
}
