import {
  takeLatest,
  select,
  call,
  put,
} from 'redux-saga/effects';

import { MEME_GET_PAGE_BY_ID } from '../constants';
import { selectCachePages } from '../selectors';
import {
  receivePage,
  loadPageStart,
  loadPageEnd,
  memeHasError,
} from '../actions/meme';
import { fetchMemeById } from '../api';
import { findMemeById } from '../utils/meme';

export function* getMemePageByIdSaga({ id }) {
  const cache = yield select(selectCachePages);
  const meme = findMemeById(cache, id);

  if (meme !== undefined) {
    yield put(receivePage(meme));
    return;
  }

  yield put(loadPageStart());

  try {
    const newMeme = yield call(fetchMemeById, id);

    yield put(receivePage(newMeme));
  } catch (error) {
    yield put(memeHasError());
  } finally {
    yield put(loadPageEnd());
  }
}

export default function* () {
  yield takeLatest(MEME_GET_PAGE_BY_ID, getMemePageByIdSaga);
}
