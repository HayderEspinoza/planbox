import { takeLatest } from 'redux-saga/effects';
import types from '../actions/types';
import {
  fetchGetInitiatives,
  fetchGetCurrentItems,
  fetchGetNextItems,
  fetchGetBacklogItems
} from './fetch';

export default function* root() {
  yield takeLatest(types.GET_INITIATIVES, fetchGetInitiatives);
  yield takeLatest(types.GET_CURRENT_ITEMS, fetchGetCurrentItems);
  yield takeLatest(types.GET_NEXT_ITEMS, fetchGetNextItems);
  yield takeLatest(types.GET_BACKLOG_ITEMS, fetchGetBacklogItems);
}
