import {
  takeLatest,
  select,
  call,
  put,
} from 'redux-saga/effects';

import { GET_MEME_BY_ID } from '../constants';
import { getCache } from '../selectors';
import { receiveMeme } from '../actions/meme';
import { fetchMemeById } from '../api';
import { findMemeById } from '../utils/meme';
import { errorMessage } from '../actions/messages';

export function* getMemeByIdSaga({ id }) {
  const cache = yield select(getCache);
  const meme = findMemeById(cache, id);

  if (meme !== undefined) {
    yield put(receiveMeme(meme));
    return;
  }

  try {
    const newMeme = yield call(fetchMemeById, id);
    yield put(receiveMeme(newMeme));
  } catch (error) {
    yield put(errorMessage(error));
  }
}

export default function* () {
  yield takeLatest(GET_MEME_BY_ID, getMemeByIdSaga);
}
