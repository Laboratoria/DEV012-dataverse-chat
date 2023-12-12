import { navigateTo } from "../router.js";

export const createBtnChat = (characterId, btnText) => {
  const btnCompChat = document.createElement("button");
  btnCompChat.className = "button-home ";
  btnCompChat.textContent = btnText;

  const verificationRoute = () => {
    const localStorageAPI = localStorage.getItem("key");
    if (localStorageAPI !== "" && localStorageAPI !== undefined && localStorageAPI !== null) {
      navigateTo('/panelChr', { id: characterId });
    } else {
      navigateTo('/api', { pathToNavigate: '/panelChr', propsToNavigate: { id: characterId }  });
    }
  };
  btnCompChat.addEventListener("click", () => verificationRoute());
  return btnCompChat;
};
