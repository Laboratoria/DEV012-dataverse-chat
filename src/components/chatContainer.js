export const ChatPanel = () => {
    // Contenedor principal
    const chatContainer = document.createElement('div');
    chatContainer.classList.add('chatContainer');

    // Info personaje (Trabajar llamado desde el dataset)
    const characterInfoContainer = document.createElement('div');
    characterInfoContainer.classList.add('characterInfoContainer');
    const characterPhoto = document.createElement('figure');
    characterPhoto.classList.add('characterPhoto');
    characterPhoto.innerHTML = `<img src="https://th.bing.com/th/id/OIG.c3jlwCXOB8gc1DWYfx37?pid=ImgGn&w=1024&h=1024&rs=1", alt="Foto del personaje">`;
    const characterDescription = document.createElement('div');
    characterDescription.classList.add('characterDescription');
    characterDescription.innerHTML = '<p>Din Djarin, known as The Mandalorian, is a skilled bounty hunter and protector of the Child (Grogu) in the outer reaches of the galaxy.</p>';

    // Ventana chat
    const panelConversation = document.createElement('div');
    panelConversation.classList.add('panelConversation');
    const chatWindow = document.createElement('textarea');
    chatWindow.id = 'chatTextarea';

    // Espacio para escribir y enviar
    const chatInput = document.createElement('div');
    chatInput.classList.add('chat-input');

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.id = 'messageInput';
    messageInput.placeholder = 'Starts an intergalactic chat...';

    const sendMessageBtn = document.createElement('button');
    sendMessageBtn.id = 'sendMessageBtn';
    sendMessageBtn.innerText = 'Send';

    // Llamado de los elemtos 
    characterInfoContainer.appendChild(characterPhoto);
    characterInfoContainer.appendChild(characterDescription);

    panelConversation.appendChild(chatWindow);
    panelConversation.appendChild(chatInput);
    chatInput.appendChild(messageInput);
    chatInput.appendChild(sendMessageBtn);

    chatContainer.appendChild(characterInfoContainer);
    chatContainer.appendChild(panelConversation);

    return chatContainer;
};
