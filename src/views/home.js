import buton from "../components/Button.js";

const Example = () => {
    const container = document.createElement('span');
    const tittle = document.createElement('h1')
    tittle.textContent='jajaja'
    container.append(tittle, buton())
    return container
};

export default Example;