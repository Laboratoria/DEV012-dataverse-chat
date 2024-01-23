export const chatCompletions = ( ChatMessage, item) => {
  // console.log(ChatMessage, item);
  const URL = 'https://api.openai.com/v1/chat/completions'
  const APIKEY = localStorage.getItem('apikey')
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'system',
        content: `You are ${item.name} respond to all the questions`
      },
      {
        role: 'user',
        content: ChatMessage
      }
    ]
  } 

  return fetch(URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${APIKEY}`,
    },
    body: JSON.stringify(data),
  }).then((res)=> res.json())


    
}
    