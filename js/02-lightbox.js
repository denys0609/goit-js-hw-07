import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryLi = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
}
galleryLi.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

console.log(galleryItems);
