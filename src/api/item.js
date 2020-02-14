import api from './api';

const baseUrl = 'items';

export const getTasks = (item, filter) => {
  return api.get(`${baseUrl}/${item}/tasks?${filter}`);
};

export const getComments = (item, filter) => {
  return api.get(`${baseUrl}/${item}/comments?${filter}`);
};
