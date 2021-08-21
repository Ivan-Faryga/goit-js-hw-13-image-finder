import './sass/main.scss';
import ImagesApiService from './js/images-services';
import { form, gallery, showMoreBtn } from './js/refs';
// import './js/api-service';
import cardImageTpl from './templates/card-image.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

console.log(gallery);

const imagesApiService = new ImagesApiService();

form.addEventListener('submit', onSearch);
showMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  imagesApiService.searchQuery = e.currentTarget.elements.query.value;
  e.preventDefault();
  imagesApiService.resetPage();
  imagesApiService.fetchImages().then(createImgesMarkup);
}

function onLoadMore() {
  imagesApiService.fetchImages().then(createImgesMarkup);
}

function createImgesMarkup(images) {
  gallery.insertAdjacentHTML('beforeend', cardImageTpl(images));
}
