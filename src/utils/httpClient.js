import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://todoapi-production.up.railway.app',
});