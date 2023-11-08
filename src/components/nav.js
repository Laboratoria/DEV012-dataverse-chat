import { navigateTo } from "../router.js";

export const renderNav = () => {
  
  const homeIcon = document.createElement("button");
  homeIcon.id="button";
  homeIcon.classList.add("homeButton")
  
  homeIcon.innerHTML = `<img class= "home-img" src="./img/home-button.png" alt="crew-img">`    
  const nav = document.createElement("nav");
  nav.classList.add("navStyle");
  nav.appendChild(homeIcon);  

  homeIcon.addEventListener("click" ,(e) => {
    e.preventDefault();    
    navigateTo("/");
 
  })

return nav;
}