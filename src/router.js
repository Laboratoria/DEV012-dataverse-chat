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

const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id") || "";
  if (routes[pathname]) {
    const template = routes[pathname]({ ...props, id });
    root.appendChild(template);
  } else {
    renderView("/error");
  }
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  let URLvisited = window.location.origin + pathname;
  if (props.id) {
    URLvisited += `?id=${props.id}`;
  }
  history.pushState({}, "", URLvisited);
  renderView(pathname, { ...props });
};

export const URLChange = (location) => {
  renderView(location);
};