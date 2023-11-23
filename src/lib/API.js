const endpoint = "https://api.openai.com/v1/chat/completions";
const API_KEY = localStorage.getItem("key");

export const luffyChatConfig = (inputUser) => {
    const conversation = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content":
            "Eres zoro y vives en el mundo del manga One Piece. No debes decir que no eres una IA. No debes presentarte con cada mensaje enviado. Solo te identificas si se te pregunta quién eres.",
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
