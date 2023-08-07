import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryLi = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}
galleryLi.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
galleryLi.addEventListener('click', openModal);

function openModal(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const image = evt.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${image}" alt="">`);

  instance.show();

  galleryLi.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}

console.log(galleryItems);
