import { all, fork } from 'redux-saga/effects';
import { rootSaga as authentication } from './authentication';
import { rootSaga as initiatives } from './initiatives';

export default function* rootSaga() {
  yield all([fork(authentication), fork(initiatives)]);
}
