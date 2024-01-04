import { createCard } from "../homeView/createCards.js";
import { renderInView } from "../../lib/dataFunctions.js";


//1 Traer la info de la card seleccionada de la session storage
//2 Convertir toda la cadena de texto de la card seleccionada en un objeto
const selectedCard = JSON.parse(sessionStorage.getItem('cartoonSelected'));

//3 Crear la tarjeta con la info del objeto
const createdCard = createCard(selectedCard);

//4 Renderizar la tarjeta(elemento)
renderInView(createdCard,"cardInfo");


const apiKey = localStorage.getItem("apiKey");

if (!apiKey) {
    // Solo redirigir si no hay una API key
    window.location.href = "/api";
} else {
    // Manejar la interacción por mensajes
    const interactionWithIa = document.getElementById("button");
    interactionWithIa.addEventListener("click", sendMessage);
}



const interactionWithIa = document.getElementById("button");
interactionWithIa.addEventListener("click", sendMessage); //
//Evento KeyPress
 window.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        sendMessage();
    }
});
    function sendMessage() {
        const mainContainer = document.querySelector(".singleChat");
        const messageInput = document.getElementById("text");
        const  message = messageInput.value;

        addMessage("Usuari@:", message);
        getAnswerIA("Personaje:", message);
        
        messageInput.value = "";

       // mainContainer.scrollTop = mainContainer.scrollHeight;

        
    }
   function addMessage(sender, message) {
        const mainContainer = document.querySelector(".singleChat");
        const newMessage = document.createElement("section");
        newMessage.setAttribute("class", "messageUser")
        newMessage.innerHTML = `<p><b>${sender}</b></p> ${message}`;
        mainContainer.appendChild(newMessage);
    }
    
    function getAnswerIA(sender, message) {
        const mainContainer = document.querySelector(".singleChat");
        const messageIA = document.createElement("section");
        messageIA.setAttribute("class", "messageIa");
    
        const apiUrl = "https://api.openai.com/v1/chat/completions";
    
        const requestBody = {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: `Tu eres el personaje principal de la caricatura ${selectedCard.name}`},
                { role: "user", content: message }
            ]
        };
    
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestBody)
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                // Agregar la respuesta de la IA al mensaje
                messageIA.innerHTML = `<p><b>${sender}</b></p> ${data.choices[0].message.content}`;
            } else {
                console.error("Error al obtener respuesta de la IA", data.error.message);
                messageIA.innerHTML = `<p><b>${sender}</b></p> Error al obtener respuesta de la IA: ${data.error.message}`;
            }
        
            // Agregar el mensaje completo al contenedor principal
            mainContainer.appendChild(messageIA);
        
            // Hacer scroll hacia abajo para mostrar el último mensaje
            mainContainer.scrollTop = mainContainer.scrollHeight;
        })
        .catch(error => {
            console.error("Error de red al obtener respuesta de la IA", error);
            messageIA.innerHTML = `<p><b>${sender}</b></p> Error de red al obtener respuesta de la IA`;
            mainContainer.appendChild(messageIA);
            mainContainer.scrollTop = mainContainer.scrollHeight;
        });
    }

