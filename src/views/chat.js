import { ChatPanel } from "../components/chatContainer.js";
import {ReturnButton } from "../components/returnButton.js";
import { Footer } from "../components/footer.js";

export const CharacterChat = () => {
    const chatView = document.createElement('body');

    //chatView.append();
    //chatView.appendChild(nameCharacter);

    chatView.append(ChatPanel(), ReturnButton(), Footer());

    return chatView
};

