export const ApiKey = () => {
    const apiKeyView = document.createElement('div');

    const message = document.createElement('p');
    message.innerHTML = `API KEY`
    apiKeyView.appendChild(message);

    return apiKeyView
};