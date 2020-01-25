// import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
// import IconMoonConfig from '../assets/fonts/selection.json';

// export const IconMoon = createIconSetFromIcoMoon(IconMoonConfig);
export const API_URL = 'https://api.planbox.com';
// export const OFFSET = 0;
// export const LIMIT = 10;
// export const ORDER = 'asc';

// export const PAGINATION = {
//   results: [],
//   page: 0,
//   total: 0
// };

export const REQUEST_STATUSES = {
  NOT_LOADED: 'notLoaded',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed'
};

export const STATUS_TYPE = {
  FETCH: 'fetch',
  CREATE: 'create',
  UPDATE: 'update'
};

// export const SORT_BY = {
//   DESC: 'desc',
//   ASC: 'asc'
// };

// export const DEFAULT_QUERY_PARAMS = {
//   offset: OFFSET,
//   limit: LIMIT,
//   order: ORDER,
//   active: true,
//   sort: 'name'
// };

export const VALIDATION_ERRORS = {
  REQUIRED_FIELD: 'This field is required.',
  INVALID_DATE: 'Please enter a valid date.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  MIN_LENGTH: min => `Please enter at least ${min} characters in this field`,
  EXACT_LENGTH: length =>
    `Please enter exactly ${length} characters in this field`,
  EXACT_LENGTH_ZIPCODE: 'Invalid Zip code',
  IS_NAN: 'Please enter a number',
  INVALID_PHONE_FORMAT: 'Please enter a valid phone format.',
  INVALID_DATA: 'Invalid data'
};

export const REGEX = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  PASSWORD: /^(?=.*[0-9])(?=.*[A-zñ])([A-z0-9ñ]+)$/,
  NUMERIC: /^[0-9]+$/,
  CELLPHONE: /^(\+)?[0-9]+$/
};

export const IMAGES = {
  LOGO: require('../assets/images/logo.png')
};

export const COLORS = {
  PRIMARY: '#25354a',
  DANGER: '#f00'
};
