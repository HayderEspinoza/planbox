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

export const setInitiative = id => ({
  type: types.SET_INITIATIVE,
  id
});

export const getCurrentItems = payload => ({
  type: types.GET_CURRENT_ITEMS,
  payload
});

export const getCurrentItemsRequest = () => ({
  type: types.GET_CURRENT_ITEMS_REQUEST
});

export const getCurrentItemsSuccess = payload => ({
  type: types.GET_CURRENT_ITEMS_SUCCESS,
  payload
});

export const getCurrentItemsFailure = payload => ({
  type: types.GET_CURRENT_ITEMS_FAILURE,
  payload
});

export const getNextItems = payload => ({
  type: types.GET_NEXT_ITEMS,
  payload
});

export const getNextItemsRequest = () => ({
  type: types.GET_NEXT_ITEMS_REQUEST
});

export const getNextItemsSuccess = payload => ({
  type: types.GET_NEXT_ITEMS_SUCCESS,
  payload
});

export const getNextItemsFailure = payload => ({
  type: types.GET_NEXT_ITEMS_FAILURE,
  payload
});

export const getBacklogItems = payload => ({
  type: types.GET_BACKLOG_ITEMS,
  payload
});

export const getBacklogItemsRequest = () => ({
  type: types.GET_BACKLOG_ITEMS_REQUEST
});

export const getBacklogItemsSuccess = payload => ({
  type: types.GET_BACKLOG_ITEMS_SUCCESS,
  payload
});

export const getBacklogItemsFailure = payload => ({
  type: types.GET_BACKLOG_ITEMS_FAILURE,
  payload
});

export const setTimeFrame = timeframe => ({
  type: types.SET_TIMEFRAME,
  timeframe
});

export const getUtils = initiative => ({
  type: types.GET_UTILS,
  initiative
});

export const getUtilsRequest = {
  type: types.GET_UTILS_REQUEST
};

export const getUtilsSuccess = payload => ({
  type: types.GET_UTILS_SUCCESS,
  payload
});

export const getUtilsFailure = payload => ({
  type: types.GET_UTILS_FAILURE,
  payload
});

export const getTasks = payload => ({
  type: types.GET_TASKS,
  payload
});

export const getTasksRequest = {
  type: types.GET_TASKS_REQUEST
};

export const getTasksSuccess = payload => ({
  type: types.GET_TASKS_SUCCESS,
  payload
});

export const getTasksFailure = payload => ({
  type: types.GET_TASKS_FAILURE,
  payload
});

export const getComments = payload => ({
  type: types.GET_COMMENTS,
  payload
});

export const getCommentsRequest = {
  type: types.GET_COMMENTS_REQUEST
};

export const getCommentsSuccess = payload => ({
  type: types.GET_COMMENTS_SUCCESS,
  payload
});

export const getCommentsFailure = payload => ({
  type: types.GET_COMMENTS_FAILURE,
  payload
});
