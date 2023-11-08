import { computeStats, computeStatsBounty } from "../lib/dataFunctions.js";
import { renderStats } from "../components/renderFacts.js";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import data from "../data/data.js";
import { homeButton } from "../components/homeButton.js";
import { navigateTo } from "../router.js";

export const facts = () => {
  const factsView = document.createElement("div");
  factsView.className = "factsComponent";

  const headerComponent = header();
  const homeButtonComponent = homeButton();
  const renderStatsComponent = renderStats();
  const footerComponent = footer();

  //renderizado de home original
  factsView.appendChild(headerComponent);
  factsView.appendChild(homeButtonComponent);
  factsView.appendChild(renderStatsComponent);
  factsView.appendChild(footerComponent);


  const origen = factsView.querySelector("#idOrigin");
  origen.textContent =
    "Did you know that " +
    computeStats(data, "seaOfOrigin", "East Blue") +
    "% of the characters come from East Blue.";
  const crew = factsView.querySelector("#idCrew");
  crew.textContent =
    "Did you know that " +
    computeStats(data, "crewOrigin", "Straw Hat Pirates") +
    "% of the characters are from Luffy's crew (Straw Hat Pirates).";
  const bounty = factsView.querySelector("#idBounty");
  bounty.textContent =
    "Did you know that " +
    computeStatsBounty(data, "bounty", 315000000) +
    "% of the characters have a bounty over 315,000,000.";
 

  const homeButtonEvent = factsView.querySelector(".home-btn")
  homeButtonEvent.addEventListener("click", () => navigateTo("/"));

  return factsView;
};
