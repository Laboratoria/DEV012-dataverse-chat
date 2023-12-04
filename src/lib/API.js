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


