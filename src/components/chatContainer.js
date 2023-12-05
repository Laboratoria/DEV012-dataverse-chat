import { getCharacterById } from "../lib/dataFunctions.js";
import { sendMessagesToCharacter } from "../lib/API.js";

export const chatContainer = (characterId) => {
  //console.log('chatContainer', { characterId })
  const character = getCharacterById(characterId);
  //contenedores section chat
  const divChat = document.createElement("div");
  const sectionChat = document.createElement("section");
  const sectionCredential = document.createElement("section");
  const sectionPrompting = document.createElement("section");

  //elementos del contenedor sectionCredential
  const imgCredential = document.createElement("img");
  const h2Credential = document.createElement("h2");

  //elementos del contenedor sectionPrompting
  const textAreaChat = document.createElement("textarea");
  const inputPrompt = document.createElement("input");
  const buttonSend = document.createElement("button");
  const imgBtnSend = document.createElement("img");
  imgBtnSend.src = "./lib/img/send.png";
  imgBtnSend.alt = "SEND";

  //clases de los section chat
  divChat.className = "div-chat";
  sectionChat.className = "section-chat";
  sectionCredential.className = "section-credential";
  sectionPrompting.className = "section-prompting";

  //clases elementos del contenedor sectionCredential
  imgCredential.className = "imgCredential";
  h2Credential.className = "h2Credential";

  //clases elementos del contenedor sectionPromting
  textAreaChat.className = "text-area-chat";
  inputPrompt.className = "input-promp";
  buttonSend.className = "btn-send";
  imgBtnSend.className = "img-btn-send";
  imgCredential.className = "profile-icon"

  //atributos a el input y el textarea
  textAreaChat.setAttribute("id", "textAreaChat");
  inputPrompt.setAttribute("id", "inputPrompt");
  textAreaChat.setAttribute("type", "text");
  inputPrompt.setAttribute("type", "text");
  inputPrompt.setAttribute("placeholder", "Talk with me");
  buttonSend.setAttribute("type", "submit");
  //pasamos atributos que acceden a las propiedades de en la data
  imgCredential.src = character["imageUrl"];
  imgCredential.alt = character["id"];
  h2Credential.textContent = character.name;

  //funciones para agregar conversación nueva
  const addToConversation = (role, content) => {
    totalConversation.push({ role, content });
  };

  //funcion para actualizar la vista del textarea con lo escrito desde el inicio hasta el fin
  const updateTextarea = (conversationToPaint) => {
    console.log(JSON.parse(JSON.stringify(conversationToPaint)));
    conversationToPaint = conversationToPaint
      .filter((message) => message.role !== "system")
      .map((message) => {
        const newRole =
          message.role === "assistant" ? character.name : message.role;
        const messageToPaint = { role: newRole, content: message.content };
        return messageToPaint;
      });
    console.log(conversationToPaint);
    const chatTextArea = document.getElementById("textAreaChat");
    chatTextArea.value = conversationToPaint
      .map((messages) => {
        console.log({ role: messages.role, content: messages.content });
        return `${messages.role}: ${messages.content}`;
      })
      .join("\n");
  };

  // Funcion que obtiene el mensaje del input y lo envia a GPT-3.5-Turbo
  const sendMessage = () => {
    const inputUser = inputPrompt.value;
    inputPrompt.value = "";
    addToConversation("user", inputUser);
    sendMessagesToCharacter(totalConversation, characterId)
      .then((newTotalConversation) => {
        console.log(newTotalConversation);
        totalConversation = newTotalConversation;
        // Se pinta de nuevo la conversacion
        updateTextarea(totalConversation);
      })
      .catch((error) => {
        console.error("Error:", error);
        const chatTextArea = document.getElementById("textAreaChat");
        chatTextArea.value +=
          "Error al obtener la respuesta.\n" + error.message;
      });
  };

  let totalConversation = [];
  buttonSend.addEventListener("click", sendMessage);
  inputPrompt.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  //agregar hijos al sectionPrompting
  sectionPrompting.appendChild(textAreaChat);
  sectionPrompting.appendChild(inputPrompt);
  buttonSend.appendChild(imgBtnSend);
  sectionPrompting.appendChild(buttonSend);

  //agregar hijos al sectionCredential
  sectionCredential.appendChild(imgCredential);
  sectionCredential.appendChild(h2Credential);

  sectionChat.appendChild(sectionCredential);
  sectionChat.appendChild(sectionPrompting);

  divChat.appendChild(sectionChat);

  return divChat;
};
