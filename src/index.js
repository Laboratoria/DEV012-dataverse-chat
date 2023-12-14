import { setRootElement, setRoutes } from './router.js';
import {Home} from './views/home.js'
import { onURLChange } from './router.js';
//import {Example} from './views/example.js';
import {Error} from './views/error.js';
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
/*const routes = {
    "/": home,
}
//utilizamos el setRoutes para que se vincule con el router
setRoutes(routes);//toma este objeto y lo lleva al router y definirlo como si fuera el objeto routes

window.addEventListener('DOMContentLoaded', ({objetivo}) => {
    setRootElement(document.getElementById('root'))
    onURLChange('/');
 });

window.addEventListener('popstate', ({objetivo}) => {
    onURLChange('/');
 });
 */
const routes = {
    "/": Home,
    //"/example":Example,
    "/error": Error,
};

const viewContainer= document.getElementById('root');
setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")
    console.log(event.target.location.pathname);
    onURLChange(event.target.location);
})

