import { renderDetails } from "../componets/detalles.js";
import { characterDetail} from "../componets/detallesEstructura.js";
import { botonRegresar} from "../componets/botonPrincipal.js";

export const characterDetails = (props) => {
  const divCharacter = document.createElement('div');
  divCharacter.setAttribute('id', 'vistaDetalles');

  const characterView = document.createElement("section"); 
  characterView.appendChild(characterDetail(props));
  characterView.appendChild(botonRegresar());
    
  const detallesElemento = renderDetails(props);
  const contenedorDetalles = characterView.querySelector('#detallesJuegos');
  contenedorDetalles.appendChild(detallesElemento);

  divCharacter.appendChild(characterView);

 


  return divCharacter;

}

 
