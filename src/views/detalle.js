import { renderHeader } from "../components/header.js";
import { renderNav } from "../components/nav.js";
import { renderFooter } from "../components/footer.js";
import { renderChat } from "./chat.js";


export const renderH = (informacion) => {
  const chat= renderChat();
  const header = renderHeader()
  const nav = renderNav();
  const footer = renderFooter();
  const section= document.createElement("section");
  const section2= document.createElement("section");
  section2.classList.add("chat");
  section2.innerHTML+=`<section>
  <div>
  <img class ="img-chat" src="${informacion.imageUrl}">
  <h4 class = "infoChatName" itemprop="name">${informacion.name}</h3>
  <h4 class = "infoChat"> "${informacion.description}"</h4>
  <h4 class = "infoChat">Status: ${informacion.facts.status}</h4>
  <h4 class = "infoChat">Origin: ${informacion.facts.seaOfOrigin}</h4>
  <h4 class = "infoChat">Crew: ${informacion.facts.crewOrigin}</h4>
  <h4 class = "infoChat">Bounty: ${informacion.facts.bounty}</h4>
  </div>
  </section>` 
  
  const titulo = document.createElement("h2");
  titulo.innerHTML =  `CHAT WITH ${informacion.name}`;
  titulo.classList.add("detallesStyle");   
  nav.appendChild(titulo);     
  
  section.appendChild(header);
  section.appendChild(nav); 
  section2.appendChild(chat);
  section.appendChild(section2);  
  section.appendChild(footer);

  return section;
};