// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery")


const listImg = galleryItems
    .map(({ preview, original, description}) => `
<a href="${original}"><img src="${preview}" alt="${description}"/></a>
`)
    .join("");
// console.log(listImg);

galleryRef.innerHTML = listImg;
let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


// let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function (event) {
	 event.preventDefault();
});