import { Footer } from "../components/footer.js";
import { Title } from "../components/title.js";
import { saveApikey } from "../lib/apikey.js";

export const ApiKey = () => {
    const apiKeyView = document.createElement('div');
    const message = document.createElement('div');
    message.innerHTML = `
        <section class="containerAll">
        <div class=message> Hi, Human! <br> 
            To unlock the full power of your galactic journey,<br>
            enter your API Key in the section below.<br>
            </div>


            <textarea name="user-input" placeholder="Enter your API Key here..." cols="60" rows="3"></textarea>
            <br>
          <div id="buttonsContainer">
            <button id="confirmButton" data-testid="confirm-button">Confirm</button>
            <button id="returnButton" data-testid="return-button">Back to home</button>
            </div>
            <img class="customImage"src="images/apikey.png" alt="Api key">
        </section>
    `
    // Seleccionar el boton
    // console.log(message.querySelector('button#confirmButton'))
    // Añadir manejador de eventos al boton
    message.querySelector('button#confirmButton').addEventListener('click', ()=>{
    // Capturar el valor del text 
    
    // console.log(message.querySelector('textarea[name="user-input"]').value);
    // mostramos el valor del textarea en consola
    const apikeyValue = message.querySelector('textarea[name="user-input"]').value
    alert (apikeyValue)
    saveApikey(apikeyValue) // argumento
    })
   

    apiKeyView.append( Title(), message, Footer());

    return apiKeyView
};