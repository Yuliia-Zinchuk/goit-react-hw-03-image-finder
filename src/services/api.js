import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '29884579-b0e414ddacb31e478cf055115';
export const fetchImagesWithQuery = async (query, page) => {
  return axios(`?image_type=photo&orientation=horizontal&per_page=12`, {
    params: { q: query, page, key: API_KEY },
  });
  //return response.hits;
};
// export const fetchImagesWithQuery = async searchQuery => {
//   const response = axios.get(`/search?query=${searchQuery}`);
//   return response.data.hits;
// };

// export default {
//   fetchArticlesWithQuery,
// };
//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
