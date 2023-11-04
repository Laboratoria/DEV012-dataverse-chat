import { renderStats } from "../components/renderFacts.js";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

export const facts = () => {
  const factsView = document.createElement("div");
  factsView.className = "factsComponent";

  const headerComponent = header();
  //acá va el nuevo filter cosa
  const renderStatsComponent = renderStats();

  const footerComponent = footer();

  //renderizado de home original
  factsView.appendChild(headerComponent);
  factsView.appendChild(renderStatsComponent);
  factsView.appendChild(footerComponent);
};
