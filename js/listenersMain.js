import { modalWindow, imgModal, closeBtn, overlayEl } from "./DOM_links";

import {
  onItemClickCloseModal,
  modalCloseByEsc,
  onBackdropClick,
} from "./listenersCloses";

const addAllListenerModal = function () {
  closeBtn.addEventListener("click", onItemClickCloseModal);
  window.addEventListener("keydown", modalCloseByEsc);
  overlayEl.addEventListener("click", onBackdropClick);
};

export function onItemClickOpenModal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  modalWindow.classList.add("is-open");
  imgModal.src = e.target.dataset.source;
  addAllListenerModal();
}
