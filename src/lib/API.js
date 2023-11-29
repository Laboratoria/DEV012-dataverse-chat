import { getCharacterById } from "./dataFunctions.js";
// import { navigateTo } from "../router.js";

const endpoint = "https://api.openai.com/v1/chat/completions";
const API_KEY = localStorage.getItem("key");

// export const emptyPetition = (inputApi) => {
//   try {
//     const response = fetch(endpoint, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     });

//     if (response.status === 401) {
//       alert("Por favor, ingresa una API Key válida");
//       navigateTo(inputApi);
//       throw new Error("API Key inválida");
//     }
//     return response;

//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };

export const luffyChatConfig = (inputUser, characterIdChat) => {
  const characterConversation = getCharacterById(characterIdChat);
  if (!characterConversation) {
    throw new Error(alert("Personaje no Encontrado"));
  }

  const conversation = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Eres Zoro un espadachín que vive en el mundo del manga One Piece. Tu habilidad con la espada es insuperable y estás en constante búsqueda de desafíos para perfeccionar tus habilidades. No eres una IA, simplemente eres un guerrero enfocado en superar tus límites y convertirte en el espadachín más fuerte. Espero tu consejo sobre cómo enfrentar nuevos desafíos o mejorar mis técnicas de espada",
        // "Eres zoro y vives en el mundo del manga One Piece. No debes decir que no eres una IA, no debes presentarte con cada mensaje enviado.Las respuestas deben parecer que son redactadas por el personaje.",
      },
      {
        role: "user",
        content: inputUser,
      },
    ],
    temperature: 0.4,
  };
  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(conversation),
  });

  return result;
};

export const chatWithEveryone = (inputUser) => {
  const conversation = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Eres estos personajes de one piece: Monkey D. Luffy, Roronoa Zoro, Nami, Usopp, Sanji, Tony Tony Chopper, Nico Robin, Franky, Brook, Jimbei, Jewelry Bonney, Buggy the Clown, Gol D. Roger, Portgas D. Ace, Sir Crocodile, Eustass Kid, Shanks, Sabo, Trafalgar Law, Charlotte Katakuri, Marshall D. Teach, X Drake, Donquixote Doflamingo, Boa Hancock. así que deben responder colectivamente a todas las preguntas sobre sus vidas que les puedan hacer. No deben escribir todos al mismo tiempo.",
      },
      {
        role: "user",
        content: inputUser,
      },
    ],
    temperature: 0.4,
  };
  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(conversation),
  });

  return result;
};

// function generarRegexParaToken(tokenBase) {
//   // Escapar los caracteres especiales que puedan aparecer en el token base
//   var escapedTokenBase = tokenBase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
//   // Crear la expresión regular dinámica para validar el token  var regexPattern = new RegExp('^' + escapedTokenBase + '$');
//   return regexPattern;
// }
// function validarToken(token, regex) {
//   return regex.test(token);
// }
// // Token base con la estructura conocida
// var tokenBase = "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";
// // Generar la expresión regular dinámica para el token basevar regexParaToken = generarRegexParaToken(tokenBase);
// // Obtener el token almacenado en localStorage
// var tokenAlmacenado = localStorage.getItem("miToken");
// if (tokenAlmacenado) {
//   if (validarToken(tokenAlmacenado, regexParaToken)) {
//     console.log("El token almacenado cumple con la estructura.");
//   } else {
//     console.log("El token almacenado no cumple con la estructura.");
//   }
// } else {
//   console.log("No se encontró ningún token en el localStorage.");
// }
