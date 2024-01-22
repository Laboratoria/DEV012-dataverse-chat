import { ChatPanel } from "../components/chatContainer.js";
import {ReturnButton } from "../components/returnButton.js";
import { Footer } from "../components/footer.js";
import { chatCompletions } from "../lib/openIaAPI.js";

export const CharacterChat = () => {
    const chatView = document.createElement('body');

    //chatView.append();
    //chatView.appendChild(nameCharacter);

    chatView.append(ChatPanel(), ReturnButton(), Footer());

//chatView.querySelector('button#sendMessageBtn').addEventListener('click', () =>{
    // console.log('okbtn');
  //  const msg = chatView.querySelector('input#messageInput').value
    //console.log(msg);
    // chatCompletions(msg, personaje)
//})
    

    return chatView
};

