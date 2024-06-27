import Axios from "axios";

export async function searchPhoto(img, currentPage) {
    const axios = Axios.create({
        baseURL: 'https://pixabay.com/api/',
        params: {
            key: '44428338-9196df2338f39a1a95b2ab25e',
            image_type: 'photo',
            orientation: 'horizontal',
            q: `${img}`,
            safesearch: true,
            per_page: 15,
            page: currentPage,
        },
    });
    try {
        const res  = await axios.get('');
        return res.data; 
    } catch (err) {
        console.log(err);
    };      
}
