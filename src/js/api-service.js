// import { form, gallery, showMoreBtn } from './refs';

// const BASE_URL = 'https://pixabay.com/api'; //image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
// const apiKey = '22450020-f32da86f0216f1b7b94b605ba';
// let page = 1;
// let searchQuery = '';

// form.addEventListener('submit', onSearch);
// showMoreBtn.addEventListener('click', onLoadMore);

// function onSearch(e) {
//   searchQuery = e.currentTarget.elements.query.value;
//   console.log(searchQuery);
//   e.preventDefault();

//   const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

//   fetch(url).then(response => response.json());
//   return response.json();
// }

// function onLoadMore(e, page) {
//   page += 1;
//   const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

//   fetch(url).then(response => response.json());
//   return response.json();
// }

// function recieveImgs(request, page) {}

// export default recieveImgs;
