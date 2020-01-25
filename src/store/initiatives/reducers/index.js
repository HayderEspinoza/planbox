import { combineReducers } from 'redux';
import { createFetchStatusReducer } from '../../../utils/createReducers';
import types from '../actions/types';

export const getInitiativesFetchStatus = createFetchStatusReducer.forAllRegisters(
  {
    FETCH: types.GET_INITIATIVES,
    FETCH_REQUEST: types.GET_INITIATIVES_REQUEST,
    FETCH_SUCCESS: types.GET_INITIATIVES_SUCCESS,
    FETCH_FAILURE: types.GET_INITIATIVES_FAILURE
  }
);

export const entities = (state = null, action) => {
  switch (action.type) {
    case types.GET_INITIATIVES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  getInitiativesFetchStatus
});
