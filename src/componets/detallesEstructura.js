export const characterDetail = () => {
  const detallesDelPersonaje = `
    <div class=contenedorPrincipal>
    <div id="detalles">
    </div>
    <div class=contenedorTexto>
    <div class="barraChat">
    <textarea id=chatIndividual placeholder="Escribe aquí tu mensaje"></textarea>
    <button data-testid="boton-enviar" name="boton-enviar class="enviar-chat">Enviar</button>
    </div></div></div>`;
  return detallesDelPersonaje;
};
