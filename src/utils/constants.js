export const API_URL = 'https://api.planbox.com';

export const PAGINATION = {
  data: [],
  meta: {
    page: 1,
    page_size: 10,
    total_pages: 0,
    total_count: 0
  }
};

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
  DANGER: '#ff2929',
  SUCCESS: '#009a9a',
  BACKGROUND: '#25354a',
  WARNING: '#ffc107',
  RELEASED: '#0069d9'
};

export const ITERATIONS = ['current', 'next', 'backlog'];

export const IMPORTANCE = [
  'NA',
  'Nice-to-have',
  'Low',
  'Normal',
  'Hight',
  'Critical'
];

export const POSITIONS = [
  { value: 'bottom', label: 'Add to Bottom' },
  { value: 'top', label: 'Add to Top' }
];

export const STATUS_COLOR = {
  pending: COLORS.WARNING,
  warning: COLORS.WARNING,
  completed: COLORS.SUCCESS,
  blocked: COLORS.DANGER,
  released: COLORS.RELEASED,
  rejected: COLORS.DANGER,
  delivered: COLORS.SUCCESS,
  inprogress: COLORS.DANGER
};
