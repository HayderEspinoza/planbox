import { call, put } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';
import * as actions from '../actions';
// import {} from '../../../api/auth';
import { storeData, getData, removeData } from '../../../utils/helpers';

export function* fetchLogin({ payload }) {
  try {
    // yield put(actions.logInRequest());
    // const session = yield call(logIn, payload);
    // yield call(storeData, 'session', session);
    // yield put(actions.logInSuccess({ session }));
  } catch (error) {
    // const {
    //   status,
    //   statusText,
    //   data: { errors }
    // } = error;
    // if (errors) yield put(stopSubmit('LoginForm', errors));
    // yield put(actions.logInFailure({ code: status, statusText }));
  }
}

export function* fetchCheckToken() {
  try {
    console.log('fetch check token');
    yield put(actions.checkTokenRequest());
    const session = yield call(getData, 'session');
    yield put(actions.checkTokenSuccess({ session: JSON.parse(session) }));
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
