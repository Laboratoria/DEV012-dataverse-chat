export const homeButtonApi = () => {
  const sectionHomeButton = document.createElement("section");
  sectionHomeButton.classList.add("filters");
  const homeButton = document.createElement("button");
  homeButton.className = "home-btn";
  const img = document.createElement("img");
  img.className = "home";
  img.src = "./lib/img/home-button.png";
  img.alt = "botónCasa";
  const buttonApi = document.createElement("button");
  buttonApi.className = "chat-api-button"
  buttonApi.textContent = "Api Config"
  homeButton.appendChild(img);
  sectionHomeButton.appendChild(homeButton);
  sectionHomeButton.appendChild(buttonApi);

  return sectionHomeButton;
};
