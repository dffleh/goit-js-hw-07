import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.js-gallery');
const itemsMarkup = galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__link" href="${original}">
    <img 
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
    </a>
    `
}).join('');

galleryList.insertAdjacentHTML('afterbegin', itemsMarkup);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});