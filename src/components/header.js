

export const header = () => {
    const htmlHeader = `<h1>Kaonashi Movies</h1>`; //template string
    const nodoHeader = document.createElement("header");//Nodo 
    nodoHeader.innerHTML = htmlHeader;
    nodoHeader.classList.add("headerComponent");

    return nodoHeader;
}
