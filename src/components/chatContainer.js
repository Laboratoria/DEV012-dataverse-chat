import data from "../data/dataset.js";
export const ChatPanel = (item) => {
  const id = window.location.pathname.replace("/chat-", "");
  const element = data.find((personaje) => personaje.id === id);

  console.log(element);
  // Contenedor principal
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chatContainer");

  // Info personaje (Trabajar llamado desde el dataset)
  const characterInfoContainer = document.createElement("div");
  characterInfoContainer.classList.add("characterInfoContainer");
  const nameCharacter = document.createElement("p");
  nameCharacter.id = "nameCharacter";
  nameCharacter.innerHTML = `CHAT WITH ${element.name}`;
  const characterPhoto = document.createElement("figure");
  characterPhoto.classList.add("characterPhoto");
  characterPhoto.innerHTML = `<img src="${element.imageUrl}", alt="Foto del personaje">`;
  const characterDescription = document.createElement("div");
  characterDescription.classList.add("characterDescription");
  characterDescription.innerHTML = `<p> ${element.description}</p>`;

  // Ventana chat
  const panelConversation = document.createElement("div");
  panelConversation.classList.add("panelConversation");
  const chatWindow = document.createElement("textarea");
  chatWindow.id = "chatTextarea";

  // Espacio para escribir y enviar
  const chatInput = document.createElement("div");
  chatInput.classList.add("chat-input");

  const messageInput = document.createElement("input");
  messageInput.type = "text";
  messageInput.id = "messageInput";
  messageInput.placeholder = "Starts an intergalactic chat...";

  const sendMessageBtn = document.createElement("button");
  sendMessageBtn.id = "sendMessageBtn";
  sendMessageBtn.innerText = "Send";

  // Llamado de los elemtos
  characterInfoContainer.appendChild(characterPhoto);
  characterInfoContainer.appendChild(characterDescription);

  panelConversation.appendChild(nameCharacter);
  panelConversation.appendChild(chatWindow);
  panelConversation.appendChild(chatInput);
  chatInput.appendChild(messageInput);
  chatInput.appendChild(sendMessageBtn);

  chatContainer.appendChild(characterInfoContainer);
  chatContainer.appendChild(panelConversation);

  return chatContainer;
};
