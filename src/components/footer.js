
export const footer = () => {
    const htmlFooter = `<p>Developed by Emma and Gineth</p>`; //template string
    const nodoFooter = document.createElement("footer");//Nodo 
    nodoFooter.innerHTML = htmlFooter;
    nodoFooter.classList.add("footer");

    return nodoFooter;
}