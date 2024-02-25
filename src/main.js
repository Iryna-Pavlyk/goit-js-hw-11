// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input[name=message]');
const gallery = document.querySelector('.image-gallery');

const request = {
  key: '42476589-1f9c9241784e75b96bc1ad3a5',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const select = {
  captionsData: 'alt',
  captionDelay: 250,
};

let URL = 'https://pixabay.com/api/?';
const lightbox = new SimpleLightbox('.image-gallery a', select);

function getImages(link) {
  return fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          theme: 'dark',
          iconUrl: './public/octagon.svg',
          iconColor: '#fafafb',
          messageSize: '16',
          closeOnEscape: true,
          maxWidth: '432',
          position: 'topRight',
        });
        gallery.innerHTML = '';
      }
      createMarkup(data);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '<span class="loader"></span>';
  request.q = input.value;
  URL += new URLSearchParams(request);
  input.value = '';
  getImages(URL);
});

function createMarkup(data) {
  let markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
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
      }
    )
    .join('');

  gallery.innerHTML = markup;
}
