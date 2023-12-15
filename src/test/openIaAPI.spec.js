import { chatCompletions } from "../src/lib/openIaAPI";


const OpenIAResponse = jest.fn();

// hacer implementación falsa de fetch
global.fetch = jest.fn(() => Promise.resolve({
  json: OpenIAResponse
}));


describe('Endpoint de openIA', () =>
{
  it('La API es llamada con los datos adecuados', () => {

    OpenIAResponse.mockResolvedValueOnce({ choices: [{ message: 'foo' }] });

    const messages = [{role: 'user', content: 'foo'}];

    chatCompletions('12456', messages);

    expect(global.fetch).toBeCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 12456`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        messages,
      })
    });
  });

  it('El edpoint responde de manera correcta', () => {

    const response = {
      "choices": [
        {
          "message": {
            "role": "assistant",
            "content": "¡Hola!"
          }
        }]
    };

    OpenIAResponse.mockResolvedValueOnce(response);


            return chatCompletions('12345',[{ role: 'user', content: 'foo'}])
              .then((resolved) => {
              expect(resolved).toBe(response);
            });
      });
})
