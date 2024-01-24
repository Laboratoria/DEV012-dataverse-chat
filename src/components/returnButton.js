<<<<<<< HEAD
export const ReturnButton = () => {
  const button = document.createElement("button");

  button.id = "returnButton";
  button.textContent = "Back to home";
=======
import { navigateTo } from "../router.js"

export const ReturnButton = () =>{
    const button = document.createElement('button')

         button.id= "returnButton"       
         button.textContent= "Back to home"
         button.addEventListener("click", () => {
            navigateTo('/')
         })
>>>>>>> 7cadda57c4788d770513bff4092ece10821fda65

  return button;
};
