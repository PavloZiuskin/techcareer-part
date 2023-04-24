import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://6442a98533997d3ef9167253.mockapi.io/users/',
});