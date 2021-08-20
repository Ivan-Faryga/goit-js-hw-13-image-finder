const BASE_URL = "https://pixabay.com/api/?"; //image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
const apiKey = "22450020-f32da86f0216f1b7b94b605ba";


function recieveImgs(request, page) {
    const fetchImgs = fetch(`${BASE_URL}key=${apiKey}&q=${request}&page=${page}&per_page=12&image_type=photo`).then(response.json());
    return response.json();
}

export { recieveImgs };

