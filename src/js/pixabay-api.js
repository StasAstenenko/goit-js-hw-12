export function searchPhoto(img) {
    const baseUrl = 'https://pixabay.com/';
    const endPoint = 'api/';
    const options = new URLSearchParams({
        key: '44428338-9196df2338f39a1a95b2ab25e',
        image_type: 'photo',
        orientation: 'horizontal',
        q: `${img}`,
        safesearch: true,
    });
    const url = `${baseUrl}${endPoint}?${options}`;

    return fetch(url).then(res => res.json()).then(data => {
        return data.hits;
    })
        
}