import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { logIn } from '../../../api/auth';
import { storeData, getData, removeData } from '../../../utils/helpers';
import { stopSubmit } from 'redux-form';
import { VALIDATION_ERRORS } from '../../../utils/constants';

export function* fetchLogin({ payload }) {
  try {
    yield put(actions.logInRequest());
    const { data } = yield call(logIn, payload);
    yield call(storeData, 'session', data);
    yield put(actions.logInSuccess(data));
  } catch (error) {
    const {
      status,
      data: { message }
    } = error;
    yield put(actions.logInFailure({ code: status, message }));
    yield put(
      stopSubmit('LoginForm', {
        email: VALIDATION_ERRORS.INVALID_DATA,
        password: VALIDATION_ERRORS.INVALID_DATA
      })
    );
  }
}

export function* fetchCheckToken() {
  try {
    yield put(actions.checkTokenRequest());
    const session = yield call(getData, 'session');
    yield put(actions.checkTokenSuccess(JSON.parse(session)));
  } catch (error) {
    yield put(
      actions.tokenFailure({ code: error.status, message: error.toString() })
    );
  }
}

export function* fetchLogOut() {
  try {
    yield call(removeData, 'session');
  } catch (error) {
    console.log(error);
  }
}
