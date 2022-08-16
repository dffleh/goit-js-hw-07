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

let instance;

function onGalleryListClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return
    };

    const url = getOriginalImg(evt);
    instance = createModal(url);

    instance.show(window.addEventListener('keydown', onEscClick))
};

function createModal(url) {
    return basicLightbox.create(`
      <img src="${url}">
    `, {
        onClose: () => {
            window.removeEventListener('keydown', onEscClick);
        }
    });
};

function getOriginalImg(evt) {
    return evt.target.dataset.source;
};

function onEscClick(event) {
    if (event.code === 'Escape') {
        instance.close();
    }
};