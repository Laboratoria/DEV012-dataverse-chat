import { navigateTo } from "../router.js";

export const ReturnButton = () => {
  const button = document.createElement("button");

  button.id = "returnButton";
  button.textContent = "Back to home";
  button.addEventListener("click", () => {
    navigateTo("/");
  });

  return button;
};
