import Axios from "axios";
import iziToast from "izitoast";
import { hideLoadBtn } from "../main";

const per_page = 15;
let maxPage = 1;

export async function searchPhoto(img, currentPage) {
    const axios = Axios.create({
        baseURL: 'https://pixabay.com/api/',
        params: {
            key: '44428338-9196df2338f39a1a95b2ab25e',
            image_type: 'photo',
            orientation: 'horizontal',
            q: `${img}`,
            safesearch: true,
            per_page: per_page,
            page: currentPage,
        },
    });
    try {
        const { data } = await axios.get('');
        maxPage = data.totalHits / per_page;
        if (currentPage >= maxPage) {
            if (maxPage) {
                iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
           }
            hideLoadBtn();
        };
        return data.hits; 
    } catch (err) {
        console.log(err);
    };      
}
