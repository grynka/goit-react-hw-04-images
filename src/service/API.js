import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '30502346-d120979d6222d217ab4c63b0e';

export async function loadImages(searchImages, page) {
  const BASE_SEARH_PARAMS = {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
    q: searchImages,
  };

  const response = await axios.get(API_URL, {
    params: BASE_SEARH_PARAMS,
  });

  return response.data;
}