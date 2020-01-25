import api from './api';

const baseUrl = 'initiatives';

export const getInitiatives = () => {
  return api.get(`${baseUrl}`);
};

export const getItemTypes = (initiativeId, filter = '') => {
  return api.get(`${baseUrl}/${initiativeId}/item_types?${filter}`);
};

export const getProjects = (initiativeId, filter = '') => {
  return api.get(`${baseUrl}/${initiativeId}/projects?${filter}`);
};

export const getItems = (initiativeId, filter = '') => {
  return api.get(`${baseUrl}/${initiativeId}/items?${filter}`);
};
