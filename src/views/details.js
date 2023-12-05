import {header} from "../components/header.js" 

export const home = () => {
  const section = document.createElement('section');
  section.appendChild(header());
 return section;
};


export const details = () => {
    const p = document.createElement('p');
    p.innerHTML = "Aqui debe ir el chat con una sola peli"
   return p;
 };

 