import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { getInitiatives } from '../../../api/initiative';

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
