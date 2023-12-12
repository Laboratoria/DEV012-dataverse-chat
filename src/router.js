//este objeto mapea las rutas del sitio
let routes = {}; 
// es la referencia al elemento html en donde se van a dibujar los componentes 
let rootElement = ''; 

export const setRoutes =(newRoutesValue)=>{ 
    //arroja los errores en caso tal de que el string no sea un objeto, valida 
console.log(newRoutesValue)

    if(typeof newRoutesValue === "object") {
        if(newRoutesValue["/error" ]){  // se accede a los valores de un objeto, se hace de esta forma ya que el . no distingue cáracteres especiales
        routes=newRoutesValue;
        }
    }
}

//setters, antes de asignarlo, verifica si es correcto,  este export asigna funciones a los lets de arriba
export const setRootElement = (newRootElementValue)=> {
    //es importante que el setter haga validaciones 

    rootElement=newRootElementValue
}



const renderView = (pathname, props={}) => {
    //Vaciar,limpiar el elemento root 
    const root= rootElement;
    root.innerHTML ='';
    // find the correct view in ROUTES for the pathname
    console.log(pathname,routes )
    if (routes[pathname]) {
        const template=routes[pathname](props);
        //devuelve un elemento html y lo guarda un template 
        root.appendChild(template);
    }
        else {
            root.appendChild(routes['/error'](props))
        }
    // carga la vista de error si no existe una ruta asignada al pathname
    // render the correct view passing the value of props
    // add the view element to the DOM root element
  } 
  
  export const navigateTo = (pathname, props={}) => {
    // actualizar el historial del navegador a partir de las urls con pushState
    const URLvisited= window.location.hostname + pathname; 
    history.pushState({},"", URLvisited);
    // render the view with the pathname and props
    renderView(pathname, props);
  }
  
  export const onURLChange = (location) => {
    // parse the location for the pathname and search params
    // convert the search params to an object
    // render the view with the pathname and object
    renderView(location);
}