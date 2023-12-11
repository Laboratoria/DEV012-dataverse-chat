import { setRootElement, setRoutes } from './router.js';
import home from './views/home.js'
import { onURLChange } from './router.js';
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
const routes = {
    "/": home,
}

setRoutes(routes)

window.addEventListener('DOMContentLoaded', ({objetivo}) => {
    setRootElement(document.getElementById('root'))
    onURLChange('/');
 });

window.addEventListener('popstate', ({objetivo}) => {
    onURLChange('/');
 });