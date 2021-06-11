import { modalWindow, imgModal, closeBtn, overlayEl } from "./DOM_links";

export const removeAllListenerModal = function () {
  closeBtn.removeEventListener("click", onItemClickCloseModal);
  window.removeEventListener("keydown", modalCloseByEsc);
  overlayEl.removeEventListener("click", onBackdropClick);
};
export function onItemClickCloseModal() {
  modalWindow.classList.remove("is-open");
  imgModal.src = "";
  imgModal.alt = "";

  removeAllListenerModal();
}
export function modalCloseByEsc(event) {
  if (modalWindow.classList.contains("is-open")) {
    if (event.code === "Escape") {
      onItemClickCloseModal();
      imgModal.src = "";
      imgModal.alt = "";
      removeAllListenerModal();
    }
  }
}
export function onBackdropClick(e) {
  onItemClickCloseModal();
  imgModal.src = "";
  imgModal.alt = "";
  removeAllListenerModal();
}
