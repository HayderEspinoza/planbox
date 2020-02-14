import api from './api';

const baseUrl = 'items';

export const getTasks = (initiative, filter) => {
  return api.get(`${baseUrl}/${initiative}/tasks?${filter}`);
};
