export const error = () => {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("errorContainer");

  const img = document.createElement("img");
  img.className = "img-error";
  img.src = "./lib/img/noJuanpis.png";
  img.alt = "One Piece Skull Png @clipartmax.com";

  const h2 = document.createElement("h2");
  h2.classList.add("error");
  h2.textContent = "404";
  
  const h4 = document.createElement("h4");
  h4.classList.add("error-h4");
  h4.innerHTML = "Opss! the One Piece isn't here...";
  
  errorContainer.appendChild(img);
  errorContainer.appendChild(h2);
  errorContainer.appendChild(h4);

  return errorContainer;
};
