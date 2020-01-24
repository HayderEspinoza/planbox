import { createActionTypes } from './../../../utils/helpers';

export default {
  ...createActionTypes('AUTHENTICATION', 'LOGIN'),
  ...createActionTypes('AUTHENTICATION', 'CHECK_TOKEN'),
  LOGOUT: 'AUTHENTICATION/LOGOUT'
};
