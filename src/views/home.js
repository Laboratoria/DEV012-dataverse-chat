
import {header} from "../components/header.js"  
import {navBar} from "../components/nav.js" 
import {footer} from "../components/footer.js" 


export const home = () => {
    const section = document.createElement('section');
    section.appendChild(header());
   return section;
};

export const navComponent = () => {
    const section = document.createElement('section');
    section.appendChild(navBar());
   return section;
};

export const footerComponent = () => {
    const section = document.createElement('section');
    section.appendChild(footer());
   return section;
};


