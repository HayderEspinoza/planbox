import { takeLatest } from 'redux-saga/effects';
import types from '../actions/types';
import { fetchGetInitiatives } from './fetch';

export default function* root() {
  yield takeLatest(types.GET_INITIATIVES, fetchGetInitiatives);
}
