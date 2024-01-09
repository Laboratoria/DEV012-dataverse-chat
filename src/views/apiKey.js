import { Footer } from "../components/footer.js";
import { Title } from "../components/title.js";

export const ApiKey = () => {
    const apiKeyView = document.createElement('div');
    const message = document.createElement('div');
    message.innerHTML = `
        <div class="containerAll">
        <div class=message> Hi, Human! <br> 
            To unlock the full power of your galactic journey,<br>
            enter your API Key in the section below.<br>
            </div>


            <textarea name="user-input" placeholder="Enter your API Key here..." cols="60" rows="3"></textarea>
            <br>
          <div id="buttonsContainer">
            <button id="confirmButton" data-testid="confirm-button">Confirm</button>
            <button id="returnButton" data-testid="return-button">Return</button>
            </div>
            <img class="customImage"src="images/apikey.png" alt="Image Description">
        </div>
    `

    apiKeyView.append( Title(), message, Footer());

    return apiKeyView
};