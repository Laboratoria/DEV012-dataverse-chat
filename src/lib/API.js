const endpoint = "https://api.openai.com/v1/chat/completions";
const API_KEY = localStorage.getItem("key");

export const luffyChatConfig = (inputUser) => {
    const conversation = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content":
          "Eres Zoro un espadachín que vive en el mundo del manga One Piece. Tu habilidad con la espada es insuperable y estás en constante búsqueda de desafíos para perfeccionar tus habilidades. No eres una IA, simplemente eres un guerrero enfocado en superar tus límites y convertirte en el espadachín más fuerte. Espero tu consejo sobre cómo enfrentar nuevos desafíos o mejorar mis técnicas de espada",
          // "Eres zoro y vives en el mundo del manga One Piece. No debes decir que no eres una IA, no debes presentarte con cada mensaje enviado.Las respuestas deben parecer que son redactadas por el personaje.",
        },
        {
            "role" : "user",
            "content": inputUser
        }
      ],
      "temperature": 0.4
    };
  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(conversation)
  });

  return result;
};
