import { template } from "@babel/core";
import buton from "../components/returnButton.js";
import footer from "../components/footer.js"

const example = () => {
    const container = document.createElement('span');
    const tittle = document.createElement('h1')
    tittle.textContent='jajaja'
    container.append(tittle, buton())
    return container
};

export default example;

const footer = () => {
const view = document.createElement ("section");
    const footerTitle= document.createElement('h1')
    footerTitle.textContent='Devs Cami & Vane'
    view.append (footerTitle)
    return view
};
