export const renderCards = (data) => {
  const ul = document.createElement("ul");
  const divContainer = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = "FIND MORE INFO OR TALK TO YOU FAVORITE PIRATE BY CLICKING THEM";
  const buttonChatHome = document.createElement("button");
  buttonChatHome.textContent = "Chat with all";


  divContainer.appendChild(h2);
  divContainer.appendChild(buttonChatHome)
  ul.appendChild(divContainer)

  data.forEach((element) => {
    const li = document.createElement("li");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "One Piece");
    li.classList.add("cards");
    li.setAttribute("id", element.id);
    li.innerHTML = `
    <h3 itemprop="name">${element.name}</h3>
    <img src="${element.imageUrl}" alt="${element.id}">
    <p itemprop="description">${element.shortDescription}</p>
    <h4 itemprop="bounty">${element.facts.bounty} </h4>
    `;
    ul.appendChild(li);
  });
  
  return ul;
};