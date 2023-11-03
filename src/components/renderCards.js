export const renderCards = (data) => {
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
    ul.appendChild(li);
  });
  return ul;
};