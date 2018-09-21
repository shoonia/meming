import { spawn } from 'redux-saga/effects';

import pageSaga from './page';
import memeSaga from './meme';

export default function* rootSaga() {
  yield spawn(pageSaga);
  yield spawn(memeSaga);
}
