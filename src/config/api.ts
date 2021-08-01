import axios from 'axios';
import LRU from 'lru-cache';

export const cache = new LRU({ max: 20 });

export const axiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api',
});
