import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { homeButton } from "../components/homeButton.js";
import { renderDetails } from "../components/renderChrDetails.js";

const luffy =   {
  id: "monkey-d-luffy",
  name: "Monkey D. Luffy",
  shortDescription: "Captain of the Straw Hat Pirates",
  description: "Luffy is the fearless captain of the Straw Hat Pirates. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue ligula lorem, eu ornare velit maximus nec. Morbi id gravida est. Aenean pretium metus non quam condimentum, non congue nibh ultrices. Donec lacinia tempus gravida. Aliquam erat volutpat. Pellentesque egestas orci nisi, non commodo arcu mollis pharetra. In euismod nisi purus, vitae varius  " ,
  imageUrl: "https://cdn.myanimelist.net/images/characters/7/71304.jpg",
  facts: {
    bounty: "1,500,000,000 Berries",
    status: "Alive",
    seaOfOrigin: "East Blue",
    crewOrigin: "Straw Hat Pirates",
  },
}




export const details = () => {
  const detailsView = document.createElement("div");
  detailsView.className = "descriptionComponent";

  const headerComponent = header();
  const homeButtonComponent = homeButton();
  const renderCharacterComponent = renderDetails(luffy);
  const footerComponent = footer();

  detailsView.appendChild(headerComponent);
  detailsView.appendChild(homeButtonComponent);
  detailsView.appendChild(renderCharacterComponent);
  detailsView.appendChild(footerComponent);
  

  return detailsView;

};
