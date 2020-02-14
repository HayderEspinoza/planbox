import { takeLatest } from 'redux-saga/effects';
import types from '../actions/types';
import {
  fetchGetInitiatives,
  fetchGetCurrentItems,
  fetchGetNextItems,
  fetchGetBacklogItems,
  fetchGetUtils,
  fetchGetTasks,
  fetchGetComments
} from './fetch';

export default function* root() {
  yield takeLatest(types.GET_INITIATIVES, fetchGetInitiatives);
  yield takeLatest(types.GET_CURRENT_ITEMS, fetchGetCurrentItems);
  yield takeLatest(types.GET_NEXT_ITEMS, fetchGetNextItems);
  yield takeLatest(types.GET_BACKLOG_ITEMS, fetchGetBacklogItems);
  yield takeLatest(types.GET_UTILS, fetchGetUtils);
  yield takeLatest(types.GET_TASKS, fetchGetTasks);
  yield takeLatest(types.GET_COMMENTS, fetchGetComments);
}
