import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.js-gallery')
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img 
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
    </a>
    </div>
    `
}).join('');

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup)
galleryList.addEventListener('click', onGalleryListClick)

function onGalleryListClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    evt.target.data
}