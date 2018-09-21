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

/* eslint-disable */

function findMemeById(cache, id) {
  for (const key in cache) {
    const { items } = cache[key];
    const meme = items.find(item => item.id === id);

    if (meme !== undefined) {
      return meme;
    }
  }
}

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
    // error
  }
}

export default function* () {
  yield takeLatest(GET_MEME_BY_ID, getMemeByIdSaga);
}
