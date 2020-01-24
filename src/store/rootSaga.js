import { all, fork } from 'redux-saga/effects';
import { rootSaga as authentication } from './authentication';

export default function* rootSaga() {
  yield all([fork(authentication)]);
}
