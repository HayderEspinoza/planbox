import api from './api';

const baseUrl = 'auth';

export const logIn = data => {
  return api.post(`${baseUrl}`, data);
};
