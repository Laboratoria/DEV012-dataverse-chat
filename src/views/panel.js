import {header} from "../components/header.js" 

export const home = () => {
  const section = document.createElement('section');
  section.appendChild(header());
 return section;
};

export const panelAllMovies = () => {
    const p = document.createElement('p');
    p.innerHTML = "Aqui debe ir chat con todas las pelis"
   return p;
 };