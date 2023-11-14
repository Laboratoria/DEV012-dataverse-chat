export const modalApiKey = () => {
  const sectionModal = document.createElement("section");
  const divModal = document.createElement("div");
  const spanModal = document.createElement("span");
  const h2Modal = document.createElement("h2");
  const pModal = document.createElement("p");
  const inputModal = document.createElement("input");
  const btnModal = document.createElement("button");

  //clases para manipulación de estilos
  sectionModal.className.add("section-modal");
  divModal.className.add("div-modal");
  spanModal.className.add("span");
  inputModal.className.add("input-modal");
  btnModal.className.add("btn-modal");

  //Se agregan los atributos necesarios a cada elemento
  btnModal.setAttribute("type", "submit");

  //Texto de los elementos
  spanModal.textContent = "&times;";
  h2Modal.textContent = "API KEY";
  pModal.textContent = "Please, enter the corresponding key:";
  btnModal.textContent = "GO";

  //Agregar los hijos al padre
  divModal.appendChild(spanModal);
  divModal.appendChild(h2Modal);
  divModal.appendChild(pModal);
  divModal.appendChild(inputModal);
  divModal.appendChild(btnModal);

  //Agregar al contenedor padre
  sectionModal.appendChild(divModal);

  //Evento para cerrar el modal
  spanModal.addEventListener("click", function () {
  sectionModal.style.display = "none";});

  return sectionModal;
};
