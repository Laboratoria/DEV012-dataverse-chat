import { Footer } from "../components/footer.js";
import { Title } from "../components/title.js";
import { ReturnButton } from "../components/returnButton.js";

export const Error = () => {
    const errorView = document.createElement('div');
    errorView.id= "ErrorView"

    const errorMessage = document.createElement('section');
    errorMessage.innerHTML = `
    <section class="errorContainer">
        <img class="customError"src="images/404.png" alt="Image Description"> 
            <div class=errorMessage> THIS PAGE IS NOT ARMED AND OPERATIONAL <br> 
            OR MAYBE IT WAS DESTROYED<br>       
            </div>
    
        </section>
    
       
    `
    errorView.append(Title(), errorMessage, ReturnButton(), Footer());
    console.log (errorView)

    return errorView
};