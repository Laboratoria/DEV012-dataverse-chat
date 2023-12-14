
import data from "../data/dataset.js";
import {Footer} from "../components/footer.js"
import { Header } from "../components/header.js";
import { listItems } from "../components/listItems.js";
import { NavBar } from "../components/navBar.js";


export const Home = () => {
    const divContainerHome = document.createElement('div'); //se crea una sección para contener el header

    //se llaman componentes
        //const headerComponent = Header();
    //se reemplazan las const en la línea 16 que llaman a los componentes de listItems, Header y Footer. Se usa append, en lugar de appendChild para llamar a todos

    //se agregan los componentes al contenedor de toda la vista Home
    divContainerHome.append(Header(), NavBar(), listItems(data), Footer()); 
    return divContainerHome
}