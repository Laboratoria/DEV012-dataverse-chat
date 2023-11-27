import { navigateTo } from "../router.js";

export const createBtnChat = (view, inputApi, btnText, btnCompChat) => {
  btnCompChat = document.createElement("button");
  btnCompChat.className = "button-home "
  btnCompChat.textContent = btnText;

  const verificationRoute = () => {
    const localStorageAPI = localStorage.getItem("key");
    if (localStorageAPI !== "" && localStorageAPI !== undefined && localStorageAPI !== null) {
      navigateTo(view);
    } else {
      navigateTo(inputApi);
    }
  };
  btnCompChat.addEventListener("click", () => verificationRoute());
  return btnCompChat;
};
