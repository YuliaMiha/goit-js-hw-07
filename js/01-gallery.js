import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onTagContainerClick);



    const itemImage = galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description }"
                />
            </a>
        </div>`;
    })
    .join('');
  
galleryEl.insertAdjacentHTML('beforeend', itemImage);
    
//2. Реалізація делегування на div.gallery і отримання url великого зображення.
let instance;
function onTagContainerClick(e) {
    e.preventDefault(); /* по кліку не буде перенаправляти на іншу сторінку*/

    if (e.target.classList.contains("gallery__image")) {
        console.log("image");
         instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">`
            , {
                onShow: (instance) => {
                    window.addEventListener("keydown", onEscKeyPress);
                },
                onClose: (instance) => {
                    window.removeEventListener("keydown", onEscKeyPress);
                }
            })
        instance.show()
    }
}
    
function onEscKeyPress(event) {
   const KEY_CODE_ESC = "Escape";
    if (event.code === KEY_CODE_ESC) {
        console.log(event);
        instance.close();
    };  
}
