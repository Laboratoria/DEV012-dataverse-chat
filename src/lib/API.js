import { getCharacterById } from "./dataFunctions.js";
// import { navigateTo } from "../router.js";


const endpoint = "https://api.openai.com/v1/chat/completions";
// export const emptyPetition = () => {
  
// };
function getAPIKey() {
  return localStorage.getItem("key");
}

export const checkAPIKey = (key) => {
  const emptyConversation = {
    model: "gpt-3.5-turbo",
    messages: [],
  };
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(emptyConversation),
  }).then(response => {
    if(response.status === 401) throw new Error('Invalid API Key :(')
  }).catch(error => {
    console.error('Error', error)
    throw error
  }) 
}

export const sendMessagesToCharacter = (totalConversation, characterId) => {
  const character = getCharacterById(characterId);
  let requestBody
  if(totalConversation.length === 1) {
    totalConversation = [{ role: "system", content: character.prompt }].concat(totalConversation)
    requestBody = {
      model: "gpt-3.5-turbo",
      messages: totalConversation,
      temperature: 0.4,
    };
  } else if(totalConversation.length > 1) {
    requestBody = {
      model: "gpt-3.5-turbo",
      messages: totalConversation,
      temperature: 0.4
    }
  }
  
  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAPIKey()}`,
    },
    body: JSON.stringify(requestBody),
  }).then((response) => {
    // Validamos que la peticion fuera autorizada
    if (response.status === 401 || response.status === 403) {
      alert("invalid api key");
      return
    }
    // Convertimos a JSON la respuesta
    return response.json();
  }).then(responseBody => {
    // Validamos la estructura de la respuesta
    if (
      responseBody &&
      responseBody.choices &&
      responseBody.choices[0] &&
      responseBody.choices[0].message &&
      responseBody.choices[0].message.content && 
      responseBody.choices[0].message.role 
    ) {
      // Extraemos el mensaje y el rol
      const responseMessage = responseBody.choices[0].message.content;
      const responseRole = responseBody.choices[0].message.role;
      // Agregamos al final de la conversacion y retornamos
      totalConversation.push({ role: responseRole, content: responseMessage })
      return totalConversation
    }
  })

  return result;
};


export const luffyChatConfig = (inputUser, characterIdChat) => {
  getCharacterById(characterIdChat);
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
  })

  return result;
};

// export const chatWithEveryone = (inputUser) => {

//   const conversation = {
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "system",
//         content: "Eres estos personajes de one piece: Monkey D. Luffy, Roronoa Zoro, Nami, Usopp, Sanji, Tony Tony Chopper, Nico Robin, Franky, Brook, Jimbei, Jewelry Bonney, Buggy the Clown, Gol D. Roger, Portgas D. Ace, Sir Crocodile, Eustass Kid, Shanks, Sabo, Trafalgar Law, Charlotte Katakuri, Marshall D. Teach, X Drake, Donquixote Doflamingo, Boa Hancock. Debes identificar cada personaje que se comunique con el usuario. No deben escribir todos al mismo tiempo. Puede ser un máximo de 4 a la vez y deben esperar a que termine de escribir uno antes de empezar a escribir el siguiente."
//       },
//       {
//         role: "user",
//         content: inputUser,
//       },
//     ],
//     temperature: 0.4,
//   };
//   const result = fetch(endpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify(conversation),
//   });

//   return result;

// };
