import { navigateTo } from "../router.js";

export const createBtnChat = (view, inputApi, btnText, btnCompChat) => {
  btnCompChat = document.createElement("button");
  btnCompChat.textContent = btnText;


  const verificationRoute = () => {
    const localStorageAPI = localStorage.getItem("key");
    console.log(localStorageAPI);
    if (localStorageAPI !== "" || localStorageAPI !== undefined || localStorageAPI !== null) {
      navigateTo(view);
    } else {
      navigateTo(inputApi);
    }
    // if(inputKey.value)
  };

  btnCompChat.addEventListener("click", () => verificationRoute());

  return btnCompChat;
};
