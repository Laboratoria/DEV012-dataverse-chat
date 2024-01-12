import { ChatPanel } from "../components/chatContainer.js";
import {ReturnButton } from "../components/returnButton.js";
import { Footer } from "../components/footer.js";

export const CharacterChat = () => {
    const chatView = document.createElement('body');

    chatView.append(ReturnButton());
    const nameCharacter = document.createElement('p');
    nameCharacter.innerHTML = `Din Djarin (The Mandalorian)`
    chatView.appendChild(nameCharacter);

    chatView.append(ChatPanel(), Footer());

    return chatView
};

