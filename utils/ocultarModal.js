function ocultarModal() {
  let modal = document.querySelectorAll(".modal")[0];
  let modal_container = document.querySelectorAll(".modal-container")[0];
  modal.classList.toggle("modal-close");

  setTimeout(function () {
    modal_container.style.opacity = "0";
    modal_container.style.visibility = "hidden";
  }, 600);
}

export default ocultarModal;
