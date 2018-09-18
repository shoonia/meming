import {
  takeLatest,
  select,
  call,
  put,
} from 'redux-saga/effects';

import { GET_PAGE_BY_NUMBER } from '../constants';
import { fetchPageByNumber } from '../api';
import { receivePage } from '../actions/page';
import { getCachePage } from '../selectors';
import { cachePage } from '../actions/cache';

export function* getPageByNumberSaga({ pageNumber }) {
  const page = yield select(getCachePage(pageNumber));

  if (page) {
    yield put(receivePage(page));
    return;
  }

  const newPage = yield call(fetchPageByNumber, pageNumber);
  yield put(receivePage(newPage));
  yield put(cachePage({ [newPage.pageNumber]: newPage }));
}

export default function* () {
  yield takeLatest(GET_PAGE_BY_NUMBER, getPageByNumberSaga);
}
