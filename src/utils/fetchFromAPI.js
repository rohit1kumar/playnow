import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        regionCode: 'IN',
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data);
    return data;
};
