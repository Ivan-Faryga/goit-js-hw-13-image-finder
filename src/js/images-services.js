export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.BASE_URL = 'https://pixabay.com/api';
    this.apiKey = '22450020-f32da86f0216f1b7b94b605ba';
    this.page = 1;
  }

  fetchImages() {
    console.log(this);
    const url = `${this.BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.page += 1;
        return data.hits;
      });
    // return response.json();
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  resetPage() {
    this.page = 1;
  }
}
