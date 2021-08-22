import './sass/main.scss';
import ImagesApiService from './js/images-services';
import { form, gallery, showMoreBtn } from './js/refs';
// import './js/api-service';
import cardImageTpl from './templates/card-image.hbs';
import { error, alert, notice, defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

showMoreBtn.style.display = 'none';

const imagesApiService = new ImagesApiService();

form.addEventListener('submit', onSearch);
showMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  imagesApiService.searchQuery = e.currentTarget.elements.query.value;
  if (imagesApiService.searchQuery === '') {
    return notice({ delay: 2000, text: 'please, enter some correct data' });
  }

  clearImagesContainer();
  imagesApiService.resetPage();
  imagesApiService.fetchImages().then(createImgesMarkup);

  showMoreBtn.style.display = 'block';
}

function onLoadMore() {
  imagesApiService.fetchImages().then(images => {
    createImgesMarkup(images);
    windowScrollTo();
  });
}

function createImgesMarkup(images) {
  gallery.insertAdjacentHTML('beforeend', cardImageTpl(images));
}

function clearImagesContainer() {
  gallery.innerHTML = '';
}

function windowScrollTo() {
  showMoreBtn.scrollIntoView({
    top: gallery.scrollHeight,
    behavior: 'smooth',

    // block: 'end',
  });
}

gallery.addEventListener('click', event => {
  const instance = basicLightbox.create(
    `
<img width="800" height="600" src="${event.target.dataset['img']}">
	`,
  );
  instance.show();
});
