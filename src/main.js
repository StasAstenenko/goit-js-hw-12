import { createTemplate } from './js/render-functions.js';

const formElem = document.querySelector('.form-el');
const inputElem = formElem.querySelector('.input-search');
const loadElem = document.querySelector('.loader')
const listElem = document.querySelector('.img-list');
const loadBtn = document.querySelector('.load');

let currentPage = 1;

formElem.addEventListener('submit', e => {
    e.preventDefault();
    listElem.innerHTML = '';
    currentPage = 1;
    hideLoadBtn();
    clickBtn()
});

loadBtn.addEventListener('click', () => {
    currentPage++;
    hideLoadBtn();
    clickBtn();
});

async function clickBtn() {
    if (inputElem.value.trim() === '') {
        hideLoadBtn();
        return;
    } else {
        const success = await createTemplate(inputElem.value.trim(), currentPage);
        if (success) {
            showLoadBtn();
            scrollToNewImages();
        } else {
            hideLoadBtn();
        }
    }
    loadElem.classList.add('visually-hidden');
}

function showLoadBtn() {
    loadBtn.classList.remove('visually-hidden');
}

export  function hideLoadBtn() {
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