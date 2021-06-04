// Імпорт масива об'єктів з лінками світлин
import galleryItems from "./gallery-items.js";

//створюємо лінки для js
const galleryContainerEl = document.querySelector(".js-gallery");
const modalWindow = document.querySelector(".js-lightbox");
const closeBtn = document.querySelector(".lightbox__button");
const imgModal = document.querySelector(".lightbox__image");
const overlayEl = document.querySelector(".lightbox__overlay");

//Присвоюємо перемінній фунцію розмітки "шаблонної строки"
const itemCadrMarkup = createItemCadrGallery(galleryItems);

//добавляємо перемінну (з вмістом галереї світлин) в index.html
galleryContainerEl.insertAdjacentHTML("beforeend", itemCadrMarkup);

//функція перебору масива світлин з підстановою в шаблонну строку
function createItemCadrGallery(gallaryItems) {
  return gallaryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="#${preview}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li> `;
    })
    .join("");
}

//створюємо Listener's та вставляємо подію
galleryContainerEl.addEventListener("click", onItemClickOpenModal);

const addAllListenerModal = function () {
  closeBtn.addEventListener("click", onItemClickCloseModal);
  window.addEventListener("keydown", modalCloseByEsc);
  //   window.addEventListener("keydown", switchImagesByIndex);
  overlayEl.addEventListener("click", onBackdropClick);
};

const removeAllListenerModal = function () {
  closeBtn.removeEventListener("click", onItemClickCloseModal);
  window.removeEventListener("keydown", modalCloseByEsc);
  //   window.removeEventListener("keydown", switchImagesByIndex);
  overlayEl.removeEventListener("click", onBackdropClick);
};
//створюємо подію відкриття модалки
function onItemClickOpenModal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  modalWindow.classList.add("is-open");
  imgModal.src = e.target.dataset.source;
  addAllListenerModal();
}

//подія закриття модалки по кліку на "close"
function onItemClickCloseModal() {
  modalWindow.classList.remove("is-open");
  imgModal.src = "";
  imgModal.alt = "";

  removeAllListenerModal();
}

//подія закриття модалки по кноп. 'Esc'
function modalCloseByEsc(event) {
  if (modalWindow.classList.contains("is-open")) {
    if (event.code === "Escape") {
      onItemClickCloseModal();
      imgModal.src = "";
      imgModal.alt = "";
      removeAllListenerModal();
    }
  }
}

//подія закриття модалки по кліку на "backdrop"
function onBackdropClick(e) {
  onItemClickCloseModal();
  imgModal.src = "";
  imgModal.alt = "";
  removeAllListenerModal();
}

//              НЕ ПРАЦЮЄ!!!!!!!!!!!!!!!!! :( хз чому
//Зміна світлини за домомогою кнопок керування "стрілки"
// const arrayUrlOriginal = [];
// galleryItems.forEach((item) => arrayUrlOriginal.push(item.original));

// function switchImagesByIndex(e) {
//   let newIndex;
//   const currentIndex = arrayUrlOriginal.indexOf(imgModal.src);

//   if (e.code === "ArrowLeft") {
//     newIndex = currentIndex - 1;
//     console.log(newIndex);
//     if (newIndex === -1) {
//       newIndex = arrayUrlOriginal.length - 1;
//     } else if (e.code === "ArrowRight") {
//       newIndex = currentIndex + 1;
//       if (newIndex === arrayUrlOriginal.length) {
//         newIndex = 0;
//       }
//     } else {
//       return;
//     }
//     imgModal.src = arrayUrlOriginal[newIndex];
//   }
// }
