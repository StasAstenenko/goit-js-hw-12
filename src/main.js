import { createTemplate } from './js/render-functions.js';
// Описаний в документації



const formElem = document.querySelector('.form-el');
const inputElem = formElem.querySelector('.input-search');
const loadElem = document.querySelector('.loader')

formElem.addEventListener('submit', e => {
    e.preventDefault();
    loadElem.classList.remove('visually-hidden');

    setTimeout(clickBtn, 2000);

});

function clickBtn() {
    loadElem.classList.add('visually-hidden');
    if (inputElem.value.trim() === '') {
        return;
    } else {
        createTemplate(inputElem.value.trim());
    };
}

