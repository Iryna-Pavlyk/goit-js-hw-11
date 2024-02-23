// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';
// // Описаний у документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

const KEY = '42476589-1f9c9241784e75b96bc1ad3a5';
const URL = 'https://pixabay.com/api/';
const QUERY = 'dog+cat';
const LINK = `${URL}?key=${KEY}&q=${QUERY}`;
const inputForm = document.querySelector('input[name=message]');

function getImages() {
  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .catch(error => {
      alert(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    });
}

getImages().then(data => {
  const images = data.hits;
  document.body.innerHTML = images
    .map(({ webformatURL }) => `<img src='${webformatURL}'>`)
    .join('');
});
