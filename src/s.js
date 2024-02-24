// Описаний у документації

// const input = document.querySelector('input[name=message]');
// const form = document.querySelector('.form');
// const gallery = document.querySelector('.image-gallery');

// const KEY = '42476589-1f9c9241784e75b96bc1ad3a5';
// const URL = 'https://pixabay.com/api/';
// input.value = '';
// const LINK = `${URL}?key=${KEY}&q=${input.value}&image_type=photo&orientation=horizontal&safesearch=true`;

// const lightbox = new SimpleLightbox('.gallery a');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   getImages(LINK);
// });

// function getImages(link) {
//   return fetch(link)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Image error!');
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (!data.hits[0]) {
//         iziToast.show({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           backgroundColor: '#EF4040',
//           messageColor: '#FAFAFB',
//           position: 'topRight',
//           iconColor: '#ffffff',
//           maxWidth: 432,
//           messageSize: 16,
//         });

//         gallery.innerHTML = '';
//         return;
//       }

//       createMarkup(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// function createMarkup(data) {
//   let markup = data.hits
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `<li class="gallery-item">
//       <div class="image-wrapper"><a href="${largeImageURL}"><img class="image" src="${webformatURL}" alt="${tags}" width="360"
//                     height="200"></a></div>
//       <div class="text-wrapper">
//         <ul class="text-list">
//           <li class="text-list-item">
//             <h3 class="text-list-title">Likes</h3>
//             <p class="text-list-param">${likes}</p>
//           </li>
//           <li class="text-list-item">
//             <h3 class="text-list-title">Views</h3>
//             <p class="text-list-param">${views}</p>
//           </li>
//           <li class="text-list-item">
//             <h3 class="text-list-title">Comments</h3>
//             <p class="text-list-param">${comments}</p>
//           </li>
//           <li class="text-list-item">
//             <h3 class="text-list-title">Downloads</h3>
//             <p class="text-list-param">${downloads}</p>
//           </li>
//         </ul>
//       </div>
//     </li>`;
//       }
//     )
//     .join('');
//   gallery.innerHTML = markup;
//   lightbox.refresh();
// }
