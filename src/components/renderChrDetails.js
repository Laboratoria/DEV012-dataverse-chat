import { createBtnChat } from "./btnChat.js";

export const renderDetails = (character) => {
  // Main Container
  const section = document.createElement("section");
  section.classList.add("section-details");

  // Title
  const h2 = document.createElement("h2");
  h2.className = "h2-details";
  h2.textContent = "Character Details";

  // Card Container
  const divPadre = document.createElement("div");
  divPadre.classList.add("div-padre");
  const divCard = document.createElement("div");
  divCard.setAttribute("itemscope", "");
  divCard.setAttribute("itemtype", "One Piece");
  divCard.classList.add("div-card");
  const h3 = document.createElement("h3");
  h3.setAttribute("itemscope", "");
  h3.setAttribute("itemtype", "One Piece");
  h3.textContent = character.name;
  const img = document.createElement("img");
  img.src = character["imageUrl"];
  img.alt = character["id"];
  img.className = "img-details"
  const pCards = document.createElement("p");
  pCards.className = "p-cards"
  pCards.textContent = character.shortDescription;
  const h4 = document.createElement("h4");
  h4.textContent = character.facts.bounty;

  // Details Paragraph
  const divDetails = document.createElement("div");
  divDetails.classList.add("div-details");
  const pDetails = document.createElement("p");
  pDetails.textContent = character.description;
  const buttonChat = createBtnChat(character.id, "CHAT WITH ME")

  // Adding children to Internal card
  divCard.appendChild(h3);
  divCard.appendChild(img);
  divCard.appendChild(pCards);
  divCard.appendChild(h4);

  // Adding children to Details container
  divDetails.appendChild(pDetails)
  divDetails.appendChild(buttonChat)

  // Adding to Card Container
  divPadre.appendChild(divCard);
  divPadre.appendChild(divDetails);

  // Adding to Main Container
  section.appendChild(h2);
  section.appendChild(divPadre);

  return section;
};
