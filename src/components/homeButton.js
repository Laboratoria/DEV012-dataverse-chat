export const homeButton = () => {
  const sectionHomeButton = document.createElement("section");
  sectionHomeButton.classList.add("filters");
  const homeButton = document.createElement("button");
  homeButton.className = "home-btn";
  const img = document.createElement("img");
  img.className = "home";
  img.src = "./lib/img/home-button.png";
  img.alt = "botónCasa";

  homeButton.appendChild(img);
  sectionHomeButton.appendChild(homeButton);

  return sectionHomeButton;
};
