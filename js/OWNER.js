import galleryItems from "./gallery-items";
import markupGallery from "./cardMarkup";
import { galleryContainerEl } from "./DOM_links";
import { onItemClickOpenModal } from "./listenersMain";
import { removeAllListenerModal } from "./listenersCloses";
galleryContainerEl.insertAdjacentHTML("beforeend", markupGallery(galleryItems));
galleryContainerEl.addEventListener("click", onItemClickOpenModal);
