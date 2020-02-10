import { combineReducers } from 'redux';
import { createFetchStatusReducer } from '../../../utils/createReducers';
import types from '../actions/types';
import { PAGINATION } from '../../../utils/constants';

export const getInitiativesFetchStatus = createFetchStatusReducer.forAllRegisters(
  {
    FETCH: types.GET_INITIATIVES,
    FETCH_REQUEST: types.GET_INITIATIVES_REQUEST,
    FETCH_SUCCESS: types.GET_INITIATIVES_SUCCESS,
    FETCH_FAILURE: types.GET_INITIATIVES_FAILURE
  }
);

export const getCurrentItemsFetchStatus = createFetchStatusReducer.forAllRegisters(
  {
    FETCH: types.GET_CURRENT_ITEMS,
    FETCH_REQUEST: types.GET_CURRENT_ITEMS_REQUEST,
    FETCH_SUCCESS: types.GET_CURRENT_ITEMS_SUCCESS,
    FETCH_FAILURE: types.GET_CURRENT_ITEMS_FAILURE
  }
);

export const getNextItemsFetchStatus = createFetchStatusReducer.forAllRegisters(
  {
    FETCH: types.GET_NEXT_ITEMS,
    FETCH_REQUEST: types.GET_NEXT_ITEMS_REQUEST,
    FETCH_SUCCESS: types.GET_NEXT_ITEMS_SUCCESS,
    FETCH_FAILURE: types.GET_NEXT_ITEMS_FAILURE
  }
);

export const getBacklogItemsFetchStatus = createFetchStatusReducer.forAllRegisters(
  {
    FETCH: types.GET_BACKLOG_ITEMS,
    FETCH_REQUEST: types.GET_BACKLOG_ITEMS_REQUEST,
    FETCH_SUCCESS: types.GET_BACKLOG_ITEMS_SUCCESS,
    FETCH_FAILURE: types.GET_BACKLOG_ITEMS_FAILURE
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

export const current = (state = PAGINATION, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.GET_CURRENT_ITEMS_SUCCESS: {
      const { data } = state;
      const { data: incoming, meta } = payload;
      return meta.page === 1 ? payload : { data: [...data, ...incoming], meta };
    }
    case types.SET_INITIATIVE:
      return PAGINATION;
    default:
      return state;
  }
};

export const next = (state = PAGINATION, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.GET_NEXT_ITEMS_SUCCESS: {
      const { data } = state;
      const { data: incoming, meta } = payload;
      if (!meta) return PAGINATION;
      return meta.page === 1 ? payload : { data: [...data, ...incoming], meta };
    }
    case types.SET_INITIATIVE:
      return PAGINATION;
    default:
      return state;
  }
};

export const backlog = (state = PAGINATION, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.GET_BACKLOG_ITEMS_SUCCESS: {
      const { data } = state;
      const { data: incoming, meta } = payload;
      return meta.page === 1 ? payload : { data: [...data, ...incoming], meta };
    }
    case types.SET_INITIATIVE:
      return PAGINATION;
    default:
      return state;
  }
};

export const timeframe = (state = 'current', action) => {
  switch (action.type) {
    case types.SET_TIMEFRAME: {
      const { timeframe } = action;
      return timeframe;
    }
    default:
      return state;
  }
};

export const initiative = (state = null, action) => {
  switch (action.type) {
    case types.SET_INITIATIVE: {
      const { id } = action;
      return id;
    }
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  initiative,
  getInitiativesFetchStatus,
  getCurrentItemsFetchStatus,
  getNextItemsFetchStatus,
  getBacklogItemsFetchStatus,
  timeframe,
  backlog,
  next,
  current
});
