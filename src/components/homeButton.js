// import {home} from "../views/home.js"

export const homeButton = () => {
  const section = document.createElement("section");
  section.classList.add("filters");
  section.innerHTML = ` 
  <button class="home-btn"><img class="home" src="./lib/img/home-button.png" alt=""/></img></button>
  `;

  // const homeButton = section.getElementsByClassName("home-btn");
  // const homeView = home();

  // homeButton.addEventlistener("click", () => {
  //   homeView;
  // })
  
  return section;
};
