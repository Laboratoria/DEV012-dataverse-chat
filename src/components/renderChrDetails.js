export const renderDetails = (luffy) => {
  const section = document.createElement("section");
  section.classList.add("section-details")
  const divPadre = document.createElement("div");
  divPadre.classList.add("div-padre");
  const divCard = document.createElement("div");
  divCard.setAttribute("itemscope", "");
  divCard.setAttribute("itemtype", "One Piece");
  divCard.classList.add("div-card");
  const h3 = document.createElement("h3");
  h3.setAttribute("itemscope", "");
  h3.setAttribute("itemtype", "One Piece");
  h3.textContent = luffy.name;
  const img = document.createElement("img");
  img.src = luffy["imageUrl"];
  img.alt = luffy["id"];
  const pCards = document.createElement("p");
  pCards.textContent = luffy.shortDescription;
  const h4 = document.createElement("h4");
  h4.textContent = luffy.facts.bounty;

  const divDetails = document.createElement("div");
  divDetails.classList.add("div-details");
  const pDetails = document.createElement("p");
  pDetails.textContent = luffy.description;
  const buttonChat = document.createElement("button");
  buttonChat.textContent = "Chat with me";



  divCard.appendChild(h3);
  divCard.appendChild(img);
  divCard.appendChild(pCards);
  divCard.appendChild(h4);

  divDetails.appendChild(pDetails)
  divDetails.appendChild(buttonChat)



  divPadre.appendChild(divCard);
  divPadre.appendChild(divDetails);
  section.appendChild(divPadre);

  return section;
};
