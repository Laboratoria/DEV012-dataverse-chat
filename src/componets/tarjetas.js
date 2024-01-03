import { navigateTo } from "../router.js";

export const renderItems = (data) => {
  const contenedorUl = document.createElement("ul");
  
  for (const datos of data) {
    const contenedorLi = document.createElement("li");
    contenedorUl.appendChild(contenedorLi);

    const grupodl = document.createElement("dl");
    contenedorLi.appendChild(grupodl);
    grupodl.setAttribute("itemscope", "");
    grupodl.setAttribute("itemtype", "videojuegos");

    const portada = document.createElement("img");
    grupodl.appendChild(portada);
    portada.src = datos.imageUrl;

    const dt1 = document.createElement("dt");
    grupodl.appendChild(dt1);
    dt1.textContent = "Nombre:";

    const dd1 = document.createElement("dd");
    grupodl.appendChild(dd1);
    dd1.setAttribute("itemprop", "name");
    dd1.textContent = datos.name;

    const dt2 = document.createElement("dt");
    grupodl.appendChild(dt2);
    dt2.textContent = "Descripción corta:";

    const dd2 = document.createElement("dd");
    grupodl.appendChild(dd2);
    dd2.setAttribute("itemprop", "shortDescription");
    dd2.textContent = datos.shortDescription;

    contenedorLi.addEventListener("click",()=>{ 
      navigateTo('/detalle')
    })
  }


  return contenedorUl;
};