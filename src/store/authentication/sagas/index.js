import { takeLatest } from 'redux-saga/effects';
import types from '../actions/types';
import { fetchLogin, fetchLogOut, fetchCheckToken } from './fetch';

export default function* root() {
  yield takeLatest(types.CHECK_TOKEN, fetchCheckToken);
  yield takeLatest(types.LOGIN, fetchLogin);
  yield takeLatest(types.LOGOUT, fetchLogOut);
}
