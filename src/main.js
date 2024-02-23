// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const KEY = '42476589-1f9c9241784e75b96bc1ad3a5';
const URL = 'https://pixabay.com/api/';
const QUERY = 'dog';
const LINK = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`;
const form = document.querySelector('.form');
const imageGallery = document.querySelector('.image-gallery');

function getImages() {
  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: 'rgba(82, 223, 79, 0.3)',
        position: 'topCenter',
      });
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const items = createMarkup(data);
  imageGallery.innerHTML = items.join('');
});
// getImages().then(data => {
//   const images = data.hits;
//   document.body.innerHTML = images
//     .map(({ webformatURL }) => `<img class ='images' src='${webformatURL}>`)
//     .join('');
// });

function createMarkup(data) {
  return data.map(item => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = item;
    return `<li class="gallery-item">
      <div class="image-wrapper"><a href="${largeImageURL}"><img class="image" src="${webformatURL}" alt="${tags}" width="360"
                    height="200"></a></div>
      <div class="text-wrapper">
        <ul class="text-list">
          <li class="text-list-item">
            <h3 class="text-list-title">Likes</h3>
            <p class="text-list-param">${likes}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Views</h3>
            <p class="text-list-param">${views}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Comments</h3>
            <p class="text-list-param">${comments}</p>
          </li>
          <li class="text-list-item">
            <h3 class="text-list-title">Downloads</h3>
            <p class="text-list-param">${downloads}</p>
          </li>
        </ul>
      </div>
    </li>`;
  });
}
