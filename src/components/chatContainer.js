import { luffyChatConfig } from "../lib/API.js";
export const chatContainer = () => {
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

  //atributos a el input y el textarea
  textAreaChat.setAttribute("id", "textAreaChat");
  inputPrompt.setAttribute("id", "inputPrompt");
  textAreaChat.setAttribute("type", "text");
  inputPrompt.setAttribute("type", "text");
  inputPrompt.setAttribute("placeholder", "Talk with me");
  buttonSend.setAttribute("type", "submit");

  h2Credential.textContent = "poop";

  let totalConversation = [];
  buttonSend.addEventListener("click", () => {
    const inputUser = inputPrompt.value;
    luffyChatConfig(inputUser).then((response) => {
      return response.json();
    }).then((conversation) => {
      let messages = "No se ha encontrado respuesta.";
      //funciones para agregar conversación nueva
      const addConvertation = (role,content) => {totalConversation.push({role,content});};
      console.log(totalConversation);
      //funcion para actualizar la vista del textarea con lo escrito desde el inicio hasta el fin
      const updateTextarea = () => {
        const chatTextArea = document.getElementById("textAreaChat");
        chatTextArea.value = totalConversation.map(messages => `${messages.role}: ${messages.content}`).join("\n") 
      };
      if (conversation && conversation.choices && conversation.choices[0] && conversation.choices[0].message && conversation.choices[0].message.content) {
        addConvertation("user",inputUser);
        console.log(totalConversation);
        messages = conversation.choices[0].message.content;
        addConvertation("system",messages);
        updateTextarea();
      } 
  
      // Agregar la respuesta al textarea
    }).catch((error) => {
      console.error("Error:", error);
      const chatTextArea = document.getElementById("textAreaChat");
      chatTextArea.value += "Error al obtener la respuesta.\n";
    });
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
