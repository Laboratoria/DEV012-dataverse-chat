import { chatCompletions } from "../lib/openIaAPI.js"

export const characterDetail = (props) => {
  const contenedorPrincipal = document.createElement("div");
  contenedorPrincipal.className = "contenedorPrincipal";
  contenedorPrincipal.innerHTML = `<div class="detallesJuegos2" id="detallesJuegos"></div>`;
  const contenedorTexto = document.createElement("div");
  contenedorTexto.className = "contenedorTexto";
  const contenedorConversacion = document.createElement("div");
  contenedorConversacion.setAttribute('id', 'contenedor-conversacion');
  const barraChat = document.createElement("div");
  barraChat.className = "barraChat";
  const textArea = document.createElement("textarea");
  textArea.setAttribute('id', 'chatIndividual');
  textArea.setAttribute('placeholder', 'Escribe aquí tu mensaje');
  const botonEnviar = document.createElement("button");
  botonEnviar.setAttribute('data-testid', 'boton-enviar');
  botonEnviar.setAttribute('name', 'boton-enviar');
  botonEnviar.className = 'enviar-chat';
  botonEnviar.textContent = 'Enviar';
  barraChat.appendChild(textArea);
  barraChat.appendChild(botonEnviar);
  contenedorTexto.appendChild(contenedorConversacion);
  contenedorTexto.appendChild(barraChat);
  contenedorPrincipal.appendChild(contenedorTexto);

  botonEnviar.addEventListener('click', () => {
    //console.log(textArea.value);
    if (textArea === '') {
      alert('Escribe un mensaje de texto antes de enviar');
    } else {
      const mensaje = document.createElement('div');
      mensaje.textContent = "Usuario: " + textArea.value;
      contenedorConversacion.appendChild(mensaje);

      chatCompletions(textArea.value, contenedorConversacion, props.personaje, props.name);
      textArea.value = '';
    }
  })
  return contenedorPrincipal;
};