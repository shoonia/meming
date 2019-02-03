import { spawn } from 'redux-saga/effects';

import listSaga from './list';
import memeSaga from './meme';

export default function* rootSaga() {
  yield spawn(listSaga);
  yield spawn(memeSaga);
}
