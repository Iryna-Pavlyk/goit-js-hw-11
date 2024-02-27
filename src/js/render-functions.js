import octagon from '../img/octagon.png';
import { gallery } from '../main';
import { createMarkup } from '../js/pixabay-api';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const select = {
  captionsData: 'alt',
  captionDelay: 250,
};
const lightbox = new SimpleLightbox('.image-gallery a', select);

export function getImages(link) {
  return fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          theme: 'dark',
          iconUrl: octagon,
          iconColor: '#fafafb',
          messageSize: '16',
          closeOnEscape: true,
          maxWidth: '432',
          position: 'topRight',
        });
        gallery.innerHTML = '';
      }
      createMarkup(data);
      return lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    });
}
