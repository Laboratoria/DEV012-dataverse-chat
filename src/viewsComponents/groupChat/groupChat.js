import { footer } from "../../staticsComponents/footer.js";
export const groupChatView = () => {

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './viewsComponents/groupChat/stylesGroup.css';
    
    document.head.appendChild(link);

    const container = document.createElement('div')
    container.setAttribute("id", "groupView")

    const groupHeader = document.createElement("header")
    groupHeader.setAttribute("class", "header")
    groupHeader.innerHTML = `
    <img id="cartoon">
    <a href="/">
    <i class="fa-solid fa-house"></i>
    </a>
    `

    const groupRoot = document.createElement('main')
    groupRoot.setAttribute("id", "apiRoot")
    groupRoot.setAttribute("class", "main")
    groupRoot.innerHTML = `
    <section id ="chat">
    "Chat grupal"
    </section>
    <section id ="questions">
    <label for="text" id="phrase"> Un momento, están pensando...</label>
    <br>
    <input id ="text" type="text" >
    <a href="/">
    <button type="submit" id="button">Enviar</button>
    </a>
    <br>
    </section>
    `
    container.appendChild(groupHeader);
    container.appendChild(groupRoot);
    document.body.appendChild(container);
    document.body.appendChild(footer);
    return container
}