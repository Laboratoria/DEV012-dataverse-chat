export const Error = () => {
    const errorView = document.createElement('div');

    const errorMessage = document.createElement('p');
    errorMessage.innerHTML = `Error`
    errorView.appendChild(errorMessage);

    return errorView
};