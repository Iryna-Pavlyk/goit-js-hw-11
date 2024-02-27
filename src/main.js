import { getImages } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('input[name=message]');
export const gallery = document.querySelector('.image-gallery');

const request = {
  key: '42476589-1f9c9241784e75b96bc1ad3a5',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

let URL = 'https://pixabay.com/api/?';

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '<span class="loader"></span>';
  request.q = input.value;
  URL += new URLSearchParams(request);
  input.value = '';
  getImages(URL);
});
