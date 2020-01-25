import api from './api';

const baseUrl = 'initiatives';

export const getInitiatives = () => {
  return api.get(`${baseUrl}`);
};
