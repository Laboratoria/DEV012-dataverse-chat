import {footer} from "../components/footer.js"
import { header } from "../components/header.js";

//Aquí se pone el componente del html, se ejecuta la vista

export const home = () => {

  let homeView = header

  homeView += footer;

  console.log(homeView);
  return homeView


}