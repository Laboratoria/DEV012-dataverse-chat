import { apiKey } from "../components/apiKey.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { homeButton } from "../components/homeButton.js";

export const apiConfig = () => {
  const apiView = document.createElement("div");
  apiView.className = "apiComponent";

  const headerComponent = header();
  const homeButtonComponent = homeButton();
  const modalAPIKeyComponent = apiKey();
  const footerComponent = footer();

  // renderizado de vista apiKey
  apiView.appendChild(headerComponent);
  apiView.appendChild(homeButtonComponent);
  apiView.appendChild(modalAPIKeyComponent);
  apiView.appendChild(footerComponent);

  return apiView;
};
