import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
const imgEl = galleryItems
  .map((e) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${e.original}">
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"
    />
  </a>
</div>`;
  })
  .join("");

listEl.innerHTML = imgEl;

listEl.addEventListener("click", onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" >`,
    {
      onShow: () => {
        addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  function onEscKeyPress(e) {
    console.log(e.code);
    if (e.code === "Escape") {
      instance.close();
      removeEventListener("keydown", onEscKeyPress);
    }
  }
  instance.show();
}
