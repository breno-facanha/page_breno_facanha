import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://apipagebrenofacanha-production.up.railway.app/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});