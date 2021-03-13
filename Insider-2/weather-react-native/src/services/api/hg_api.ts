import axios from 'axios';
import hgKey from './api-data';

export const apiKey = hgKey;

const hgAPI = axios.create({
  baseURL: `https://api.hgbrasil.com`
});

export default hgAPI;
