import { searchPhoto } from './pixabay-api.js';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const listElem = document.querySelector('.img-list');

export async function createTemplate(searchQuery, currentPage) {
    try {   
        const data = await searchPhoto(searchQuery, currentPage);
        if (data && data.length > 0) {
            const markUp = imgTemplates(data);
            listElem.insertAdjacentHTML('beforeend', markUp);
            modalShow();
        } else {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            })
            return;
        }
    } catch (err) {
        console.log(err);
        return;
    };

}

function imgTemplate({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `<li class="liElem"><a href="${largeImageURL}">
        <img src=${webformatURL} alt=${tags} data-source=${largeImageURL}/></a>
        <div>
            <p>likes: <span>${likes}</span></p>
            <p>views: <span>${views}</span></p>
            <p>comments: <span>${comments}</span></p>
            <p>downloads: <span>${downloads}</span></p>
        </div>
    </li>`
}

export function imgTemplates(arr) {
    return arr.map(imgTemplate).join('');
}

function modalShow() {
    const lightbox = new SimpleLightbox('.img-list a', { 
        overlayOpacity: 0.9,
        captionDelay: 250,
        captionsData: "alt",
    });
    lightbox.refresh()
}