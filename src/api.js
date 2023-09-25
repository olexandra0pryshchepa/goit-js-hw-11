export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '39659742-e5b767d99870e0dd08bc36f6a';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
