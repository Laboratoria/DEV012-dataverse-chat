import { template } from "@babel/core";
import buton from "../components/returnButton.js";
import footer from "../components/footer.js"
import data from "../data/dataset.js";
import buton from "../components/returnButton.js";
import { Header } from "../components/header.js";

export const Home = () => {
    const section = document.createElement('section'); //se crea una sección para contener el header
    const headerHome = section; //se asigna 
    const header = Header(); //se llama al componente
    headerHome.appendChild(header) //se agrega el componente a la sección
    return Home
}

export const Example = () => {
const example = () => {
    const container = document.createElement('span');
    const tittle = document.createElement('h1')
    tittle.textContent='jajaja'
    container.append(tittle, buton())
    return container
};
};

const footer = () => {
const view = document.createElement ("section");
    const footerTitle= document.createElement('h1')
    footerTitle.textContent='Devs Cami & Vane'
    view.append (footerTitle)
    return view
};
