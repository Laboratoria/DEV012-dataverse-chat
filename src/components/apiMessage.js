import { navigateTo } from "../router.js";

export const apiKeyModal = () => {
  const apiKeyModal = document.createElement("div");
  apiKeyModal.innerHTML = `
        <section class="containerModal">
        <div class=messageModal> Greetings, Star Wars Enthusiast!<br>
        <br>
        To unlock the full power of your galactic journey and connect with iconic <br>
        Star Wars characters, we encourage you to input your API Key, it will <br>
        serve as the key to personalized interactions, granting you access to <br>
        exclusive features and the opportunity to chat with characters <br>
        from a galaxy far, far away. <br> 
        <br>
            To unlock the full power of your galactic journey,<br>
            enter your API Key in the section below.<br>
            </div>

          <div id="buttonsContainer">
            <button id="apiKeyButton">API KEY</button>
        </section>
    `;
  apiKeyModal
    .querySelector("button#apiKeyButton")
    .addEventListener("click", () => {
      navigateTo("/apikey");
    });
  return apiKeyModal;
};
