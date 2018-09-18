import { spawn } from 'redux-saga/effects';

import pageSaga from './page';

export default function* rootSaga() {
  yield spawn(pageSaga);
}
