import data from "../data/dataset.js";
import { renderDetails } from "../componets/detalles.js";
import { footer } from "../componets/footer.js";
import { characterDetail} from "../componets/detallesEstructura.js";
import { botonRegresar} from "../componets/botonPrincipal.js";



export const characterDetails = () => {
  const divCharacter = document.createElement('div');
  divCharacter.setAttribute('id', 'vistaDetalles')

  const characterView = document.createElement("section");
  characterView.innerHTML = botonRegresar() + characterDetail()  //footer();

  const detallesDiv = document.createElement('div');
  detallesDiv.setAttribute('id', 'detallesDiv');
  detallesDiv.appendChild(renderDetails(data));
  characterView.appendChild(detallesDiv);

  divCharacter.appendChild(characterView);


  return divCharacter;

}

 
