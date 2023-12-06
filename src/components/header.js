
// Renderizar el Header en las distinas vistas
export const header = () => {
    const htmlHeader = `<img id="logo" src="./media/logokaonashi.png" /> <h1>Kaonashi Movies</h1>`; //template string
    const nodoHeader = document.createElement("header");//Nodo 
    nodoHeader.innerHTML = htmlHeader;
    nodoHeader.classList.add("headerComponent");

    return nodoHeader;
}
