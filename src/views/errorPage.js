import {header} from "../components/header.js" 
import {footer} from "../components/footer.js" 





export const errorPage = () => {
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(footer());
 return section;
};