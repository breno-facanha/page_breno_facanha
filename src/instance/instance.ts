import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api-page-breno-facanha.onrender.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});