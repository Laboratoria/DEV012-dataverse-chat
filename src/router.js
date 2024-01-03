let routes = {};
let rootElement = '';

export const setRootEl = (newRootElement) => {
    rootElement = newRootElement;
};

export const setRoutes = (newRoutes) => {
    if (typeof newRoutes === "object") {
        routes = newRoutes;
    }
};

export const renderView = (pathname) => {
    const root = document.getElementById(rootElement); 
    root.innerHTML = '';

    if (routes[pathname]) {
        const template = routes[pathname]();
        root.appendChild(template);
    } else {
        renderView("/error");
    }
};

export const navigateTo = (pathname, props = {}) => {
    const URLvisited = window.location.hostname + pathname;
    history.pushState({}, "", URLvisited);
    renderView(pathname);
};

export const URLChange = (location) => {
    renderView(location);
};
