import types from './types';

export const logIn = payload => ({
  type: types.LOGIN,
  payload
});

export const logInRequest = () => ({
  type: types.LOGIN_REQUEST
});

export const logInSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload
});

export const logInFailure = payload => ({
  type: types.LOGIN_FAILURE,
  payload
});

export const checkToken = {
  type: types.CHECK_TOKEN
};

export const checkTokenRequest = () => ({
  type: types.CHECK_TOKEN_REQUEST
});

export const checkTokenSuccess = payload => ({
  type: types.CHECK_TOKEN_SUCCESS,
  payload
});

export const checkTokenFailure = payload => ({
  type: types.CHECK_TOKEN_FAILURE,
  payload
});

export const logout = {
  type: types.LOGOUT
};
