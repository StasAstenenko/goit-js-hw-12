
function imgTemplate({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
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

