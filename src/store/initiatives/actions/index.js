import types from './types';

export const getInitiatives = {
  type: types.GET_INITIATIVES
};

export const getInitiativesRequest = () => ({
  type: types.GET_INITIATIVES_REQUEST
});

export const getInitiativesSuccess = payload => ({
  type: types.GET_INITIATIVES_SUCCESS,
  payload
});

export const getInitiativesFailure = payload => ({
  type: types.GET_INITIATIVES_FAILURE,
  payload
});
