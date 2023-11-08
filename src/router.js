let ROUTES = {};
let rootElement = "";

export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
};

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/error"]) {
      ROUTES = newRoutesValue;
    }
  }

  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
};

// const queryStringToObject = (queryString) => {
//   // convert query string to URLSearchParams
//   // convert URLSearchParams to an object
//   // return the object
// }

const renderView = (pathname, props = {}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    // in case not found render the error view
    root.appendChild(ROUTES["/error"](props));
  }
  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  const URLvisited = window.location.origin + pathname;
  history.pushState({}, "", URLvisited);
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (pathname) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(pathname);
};


