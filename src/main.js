import { imgTemplates } from './js/render-functions.js';
import { searchPhoto } from './js/pixabay-api.js';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const formElem = document.querySelector('.form-el');
const inputElem = formElem.querySelector('.input-search');
const loadElem = document.querySelector('.loader')
const listElem = document.querySelector('.img-list');
const loadBtn = document.querySelector('.load');
const liElem = document.querySelector('.liElem');

let currentPage = 1;

formElem.addEventListener('submit', e => {
    e.preventDefault();
    listElem.innerHTML = ''; 
    loadElem.classList.remove('visually-hidden');

    clickBtn();
});

loadBtn.addEventListener('click', () => {
    currentPage++;
    hideLoadBtn();
    clickBtn();
});

async function createTemplate(searchQuery, currentPage) {
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
        }
    } catch (err) {
        console.log(err);
    };

}

function clickBtn() {
    if (inputElem.value.trim() === '') {
        hideLoadBtn();
        return;
    } else {
        createTemplate(inputElem.value.trim(), currentPage);
        loadElem.classList.add('visually-hidden');
        showLoadBtn();
    };
}

function showLoadBtn() {
    loadBtn.classList.remove('visually-hidden');
}

export  function hideLoadBtn() {
    loadBtn.classList.add('visually-hidden');
}

function modalShow() {
    const lightbox = new SimpleLightbox('.img-list a', { 
        overlayOpacity: 0.9,
        captionDelay: 250,
        captionsData: "alt",
    });
    lightbox.refresh()
}