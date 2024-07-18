import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {searchPhoto} from './js/pixabay-api';
import {createPhotoCard} from './js/render-functions'


document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const gallery = document.querySelector(".gallery");
  const loader = document.querySelector('.loader');

  if (!gallery) {
    console.error('Gallery element not found');
    return;
  }

  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  searchForm.addEventListener('submit', handleSearch);

  function handleSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const queryValue = form.elements.query.value.toLowerCase().trim();

    showLoader();

    searchPhoto(queryValue)
      .then((response) => {
        clearGallery();
        if (response.hits.length === 0) {
          iziToast.warning({
            position: 'center',
            messageSize: '16',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#EF4040',
            messageColor: '#FAFAFB',
            maxWidth: 450
          });
        } else {
          addImagesToGallery(response.hits);
          lightbox.refresh();
        }
      })
      .catch(err => {
        iziToast.error({
          position: 'center',
          messageSize: '16',
          messageLineHeight: '150%',
          title: 'Error',
          message: `Something went wrong: ${err.message}`,
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB',
        });
      })
      .finally(() => {
        form.reset();
        hideLoader(); 
      });
  }

  function showLoader() {
    loader.classList.add('visible');
  }

  function hideLoader() {
    loader.classList.remove('visible');
  }

  function clearGallery() {
    gallery.innerHTML = '';
  }

  function addImagesToGallery(images) {
    const markup = createPhotoCard(images);
    gallery.insertAdjacentHTML("afterbegin", markup);
  }

  
});
