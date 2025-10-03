import axios from 'axios';


export async function getImagesByQuery(query, page) {

    const API_key = '52541009-8475ad66b76bd384e4dad34fd';
    let perPage = 15;

    const param = new URLSearchParams({
        key: API_key,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: perPage
    });

    const response = await axios.get(`https://pixabay.com/api/?${param}`);
    return response.data;
        
          
}

