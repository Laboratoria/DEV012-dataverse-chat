export const modalApiKey = () => {
  const sectionModal = document.createElement("section");
  const divContenedorModal = document.createElement("div");
  const divCloseTitle = document.createElement("div");
  const divInput = document.createElement("div");
  const spanModal = document.createElement("span");
  const h2Modal = document.createElement("h2");
  const pModal = document.createElement("p");
  const inputModal = document.createElement("input");
  const btnModal = document.createElement("button");

  //clases para manipulación de estilos
  sectionModal.classList.add("section-modal");
  divContenedorModal.classList.add("div-contenedor-modal");
  divCloseTitle.classList.add("div-close-title");
  divInput.classList.add("div-input");
  spanModal.classList.add("span-close-modal");
  inputModal.classList.add("input-modal");
  btnModal.classList.add("btn-modal");

  //Se agregan los atributos necesarios a cada elemento
  inputModal.setAttribute("type", "text");
  inputModal.setAttribute("id", "inputModal");
  btnModal.setAttribute("type", "submit");

  //Texto de los elementos
  spanModal.textContent = "X";
  h2Modal.textContent = "API KEY";
  pModal.textContent = "Please, enter the corresponding key:";
  btnModal.textContent = "GO";

  //Agregar los hijos al padre
  divCloseTitle.appendChild(h2Modal);
  divCloseTitle.appendChild(spanModal);
  divInput.appendChild(pModal);
  divInput.appendChild(inputModal);
  divInput.appendChild(btnModal);

  //Agregar al contenedor padre
  divContenedorModal.appendChild(divCloseTitle);
  divContenedorModal.appendChild(divInput);
  sectionModal.appendChild(divContenedorModal);

  //Evento para cerrar el modal
  // spanModal.addEventListener("click", function () {
  //   sectionModal.style.display = "none";
  // });

  return sectionModal;
};
