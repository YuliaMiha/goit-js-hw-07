import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const gallery = document.querySelector('.gallery');
const imgList = galleryItems

    .map(({ preview, original, description }) =>
    
        `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" /></a>`
    )

    .join("");

gallery.insertAdjacentHTML("beforeend", imgList);
    

    let lightbox = new SimpleLightbox('.gallery a', { 
    
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        
     });