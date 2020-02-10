import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { getInitiatives, getItems } from '../../../api/initiative';

export function* fetchGetInitiatives({ payload }) {
  try {
    yield put(actions.getInitiativesRequest());
    const { data } = yield call(getInitiatives);
    yield put(actions.getInitiativesSuccess(data));
  } catch (error) {
    const {
      status,
      data: { message }
    } = error;
    yield put(actions.getInitiativesFailure({ code: status, message }));
  }
}

export function* fetchGetCurrentItems({ payload }) {
  try {
    yield put(actions.getCurrentItemsRequest());

    const { id, ...rest } = payload;
    const filter = new URLSearchParams({
      timeframe: 'current',
      ...rest
    }).toString();

    const results = yield call(getItems, id, filter);

    yield put(actions.getCurrentItemsSuccess(results));
  } catch (error) {
    const {
      status,
      data: { message }
    } = error;
    yield put(actions.getCurrentItemsFailure({ code: status, message }));
  }
}

export function* fetchGetNextItems({ payload }) {
  try {
    yield put(actions.getNextItemsRequest());

    const { id, ...rest } = payload;
    const filter = new URLSearchParams({
      timeframe: 'next',
      ...rest
    }).toString();

    const results = yield call(getItems, id, filter);

    yield put(actions.getNextItemsSuccess(results));
  } catch (error) {
    const {
      status,
      data: { message }
    } = error;
    yield put(actions.getNextItemsFailure({ code: status, message }));
  }
}

export function* fetchGetBacklogItems({ payload }) {
  try {
    yield put(actions.getBacklogItemsRequest());

    const { id, ...rest } = payload;
    const filter = new URLSearchParams({
      timeframe: 'backlog',
      ...rest
    }).toString();
    const results = yield call(getItems, id, filter);

    yield put(actions.getBacklogItemsSuccess(results));
  } catch (error) {
    const {
      status,
      data: { message }
    } = error;
    yield put(actions.getBacklogItemsFailure({ code: status, message }));
  }
}
