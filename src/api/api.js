import axios from 'axios';
import { API_URL } from '../utils/constants';
import { getData } from '../utils/helpers';

const api = axios.create({
  baseURL: `${API_URL}`,
  timeout: 10000
});

api.interceptors.request.use(
  async config => {
    // Do something before request is sent
    try {
      let session = await getData('session');

      if (session) {
        session = JSON.parse(session);
        config.headers['Authorization'] = `Token token=${session.token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  function(error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return Promise.resolve(response.data);
  },
  function(error) {
    return Promise.reject(error.response);
  }
);

export default api;
