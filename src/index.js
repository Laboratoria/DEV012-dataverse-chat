import { setRootEl, setRoutes, URLChange } from './router.js';
import { Home } from './views/HOME.js';
import { characterDetails } from './views/CharacterDetail.js';
import { error } from './views/Error.js';
import { chatGrupal } from './views/chatGrupal.js';
import { api } from './views/api.js';

// Configura las rutas
const routes = {
    '/': Home,
    '/detalle': characterDetails,
    '/error': error,
    '/apiKey': api,
    '/chatGrupal': chatGrupal,
};

// Configura el elemento raíz
const root = document.getElementById('root');
setRoutes(routes);
setRootEl('root'); 

// Función para manejar los cambios de ruta
document.addEventListener("DOMContentLoaded", (event) => {
    URLChange(event.target.location.pathname);
});

// Eventos para manejar el cambio de ruta
window.addEventListener('popstate', () => {
    URLChange(window.location.pathname);
});