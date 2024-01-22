import { navigateTo } from "../router.js";
import { ChatPanel } from "./chatContainer.js";

export const listItems = (data) => {
  return data.map((item) => {
    const listCharacters = document.createElement("li");
    listCharacters.classList.add("cards");
    listCharacters.setAttribute("itemtype", "card");
    listCharacters.innerHTML += `
          <div class="cardContent">
            <dl itemscope itemtype="StarWarsCharacters">
              <strong><dt></dt><dd itemprop="name">${item.name}</dd></strong>
              <img src="${item.imageUrl}" alt="img">
              <span><dt></dt><dd itemprop="occupation">${item.facts.occupation}</dd></span>
              <dt>Affiliation:</dt><dd itemprop="affiliation">${item.facts.affiliation}</dd>
              <p><dt>Description:</dt><dd itemprop="description">${item.description}</dd></p>
            </dl>     
          </div>
        `;
        listCharacters.addEventListener('click', ()=>{
          // console.log(item);
          navigateTo(`/chat-${item.id}`, item)
          ChatPanel(item)
          
         }) 
    return listCharacters;
  });
};
