import { footer } from "../../staticsComponents/footer.js";
export const apiView = () => {
  const link = document.getElementById("pageStyles");

  if (link) {
    link.href = "./viewsComponents/apiView/stylesAPI.css";
  }

  const container = document.createElement("div");
  container.setAttribute("id", "apiView");
  //Seleccionamos elemento padre que contendrá todos los nodos
  // const apiKeyView = document.querySelector('.all')
  //Creamos elementos
  const apiHeader = document.createElement("header");
  apiHeader.setAttribute("class", "header");
  apiHeader.innerHTML = `
    <img id="cartoon">
    <a href="/">
    <i class="fa-solid fa-house"></i>
    </a>
    `;
  const apiRoot = document.createElement("main");
  apiRoot.setAttribute("id", "apiRoot");
  apiRoot.setAttribute("class", "main");
  apiRoot.innerHTML = `
    <label for="password" id="phrase">Ingresa tu API key:</label>

    <input id ="password" type="password" >
    
    <button type="submit" id="button">Enviar</button>
    
   
    `;

  //Agregamos los elementos con appendChild
  container.appendChild(apiHeader);
  container.appendChild(apiRoot);
  document.body.appendChild(container);
  document.body.appendChild(footer);

  const scriptPage = document.getElementById("pageScript");
  if (scriptPage) {
    scriptPage.remove();
  }

  const script = document.createElement("script");
  script.type = "module";
  script.src = "./viewsComponents/apiView/mainApi.js";
  script.id = "pageScript";
  document.body.appendChild(script);

  return container;
};
