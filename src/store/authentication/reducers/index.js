import { combineReducers } from 'redux';
import { createFetchStatusReducer } from '../../../utils/createReducers';
import types from '../actions/types';

export const logInFetchStatus = createFetchStatusReducer.forAllRegisters({
  FETCH: types.LOGIN,
  FETCH_REQUEST: types.LOGIN_REQUEST,
  FETCH_SUCCESS: types.LOGIN_SUCCESS,
  FETCH_FAILURE: types.LOGIN_FAILURE
});

export const checkTokenFetchStatus = createFetchStatusReducer.forAllRegisters({
  FETCH: types.CHECK_TOKEN,
  FETCH_REQUEST: types.CHECK_TOKEN_REQUEST,
  FETCH_SUCCESS: types.CHECK_TOKEN_SUCCESS,
  FETCH_FAILURE: types.CHECK_TOKEN_FAILURE
});

export const session = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const { session } = action.payload;
      return session;
    }
    case types.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  session,
  logInFetchStatus,
  checkTokenFetchStatus
});
