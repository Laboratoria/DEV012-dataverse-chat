//Aquí se pone el componente del html, se ejecuta la vista
export const renderItems = (data) => {
  const ul = document.createElement("ul");
  data.forEach((element) => {
    const li = document.createElement("li");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "One Piece");
    li.classList.add("cards");
    li.innerHTML = `
      <h3 itemprop="name">${element.name}</h3>
      <img src="${element.imageUrl}" alt="${element.id}">
      <p itemprop="description">${element.description}</p>
      <h4 itemprop="bounty">${element.facts.bounty} </h4>
      `;
    const root = document.querySelector("#root");
    ul.appendChild(li);
    root.appendChild(ul);
  });
  return ul;
};
