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

let currentPage = 1;
const per_page = 15;
let maxPage = 1;
const queryForLoadBtn = '';

formElem.addEventListener('submit', e => {
    e.preventDefault();
    listElem.innerHTML = '';
    if (inputElem.value.trim() === '') {
        iziToast.error({
            title: 'Error',
            message: 'Enter your details. Please try again!',
            position: 'topRight', 
        });
    };
    currentPage = 1;
    showLoader();
    hideLoadBtn();
    createTemplate(inputElem.value.trim(), currentPage);
});

loadBtn.addEventListener('click', () => {
    currentPage++;
    showLoader();
    hideLoadBtn();
    clickBtn(queryForLoadBtn, currentPage);
});

async function clickBtn(searchQuery, currentPage) {
    try {   
        const data = await searchPhoto(searchQuery, currentPage);
        maxPage = Math.ceil(data.total / per_page);
        if (data.total === 0) {
            hideLoader();
            showErr();
        }
        const markUp = imgTemplates(data.hits);
        listElem.insertAdjacentHTML('beforeend', markUp);
        modalShow();
        scrollToNewImages();
    } catch {
        warningErr();
    };
    updateStatus();
    hideLoader();
    inputElem.value = '';
}

function showLoadBtn() {
    loadBtn.classList.remove('visually-hidden');
}

function hideLoadBtn() {
    loadBtn.classList.add('visually-hidden');
}

function scrollToNewImages() {
    const items = document.querySelectorAll('.liElem');
    if (items.length > 0) {
        const itemHeight = items[0].getBoundingClientRect().height;
        window.scrollBy({
            top: itemHeight * 2,
            left: 0,
            behavior: 'smooth'
        });
    }
}

async function createTemplate(searchQuery, currentPage) {
    try {   
        const data = await searchPhoto(searchQuery, currentPage);
        maxPage = Math.ceil(data.total / per_page);
        if (data.total === 0) {
            hideLoader();
            showErr();
        }
        const markUp = imgTemplates(data.hits);
        listElem.insertAdjacentHTML('beforeend', markUp);
        modalShow();
    } catch {
        warningErr();
    };
    updateStatus();
    hideLoader();
    inputElem.value = '';
}

function updateStatus() {
    if (currentPage >= maxPage) {
        hideLoadBtn();
        if (maxPage) {
                iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        };
    } else {
        showLoadBtn();
    };
}
  

function modalShow() {
    const lightbox = new SimpleLightbox('.img-list a', { 
        overlayOpacity: 0.9,
        captionDelay: 250,
        captionsData: "alt",
    });
    lightbox.refresh()
}

function hideLoader() {
    loadElem.classList.add('visually-hidden');
}

function showLoader() {
    loadElem.classList.remove('visually-hidden');
}

function showErr() {
    iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
    })
};

function warningErr() {
    iziToast.warning({
        message: 'Problem with server!',
        position: 'topRight'
    });
}