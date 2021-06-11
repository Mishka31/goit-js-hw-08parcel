//функція перебору масива світлин з підстановою в шаблонну строку
export default function createItemCadrGallery(e) {
  return e
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
