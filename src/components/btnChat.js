import { navigateTo } from "../router.js";

export const createBtnChat = (view, inputApi, btnText, btnCompChat) => {
  btnCompChat = document.createElement("button");
  btnCompChat.textContent = btnText;

  const localStorageAPI = localStorage.getItem("key");

  const verificationRoute = () => {
    if (localStorageAPI !== "") {
      navigateTo(view);
    } else {
      navigateTo(inputApi);
    }
  };

  btnCompChat.addEventListener("click", () => verificationRoute());

  return btnCompChat;
};
