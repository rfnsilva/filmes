import axios from 'axios';

const apiPopulares = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&page=1',
});

export default apiPopulares;
