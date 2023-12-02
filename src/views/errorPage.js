/*Esta carpeta generalmente contiene archivos de los componentes que representan las
 diferentes páginas o vistas de tu aplicación. Cada vista (view) puede tener su propio
  archivo JavaScript, que exporta una función que es responsable de generar los elementos
   del DOM. */
   
/*const Example = () => {

};

export default Example;*/

export const errorPage = () => {
   const p = document.createElement('p');
   p.innerHTML = "error 404"
  return p;
};
