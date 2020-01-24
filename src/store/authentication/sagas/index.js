import { takeLatest } from 'redux-saga/effects';
import types from '../actions/types';
import { fetchLogin, fetchLogOut, fetchCheckToken } from './fetch';

export default function* root() {
  yield takeLatest(types.CHECK_TOKEN, fetchCheckToken);
  // yield takeLatest(types.fetchLOGIN, fetchLogin);
  // yield takeLatest(types.fetchLOGOUT, fetchLogOut);
}
