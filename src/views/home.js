// import { template } from "@babel/core";
// import buton from "../components/returnButton.js";
import {Footer} from "../components/footer.js"
// import data from "../data/dataset.js";
// import buton from "../components/returnButton.js";
import { Header } from "../components/header.js";

export const Home = () => {
    const divContainerHome = document.createElement('div'); //se crea una sección para contener el header

    //se llaman componentes
    const headerComponent = Header();

    const footerComponent = Footer(); 

    //se agregan los componentes al contenedor de toda la vista Home
    divContainerHome.appendChild(headerComponent);
    divContainerHome.appendChild(footerComponent);

    return divContainerHome
}

// export const Example = () => {
// const example = () => {
//     const container = document.createElement('span');
//     const tittle = document.createElement('h1')
//     tittle.textContent='jajaja'
//     container.append(tittle, buton())
//     return container
// };
// };

// const footer = () => {
// const view = document.createElement ("section");
//     const footerTitle= document.createElement('h1')
//     footerTitle.textContent='Devs Cami & Vane'
//     view.append (footerTitle)
//     return view
// };
