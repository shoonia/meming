import {
  takeLatest,
  select,
  call,
  put,
} from 'redux-saga/effects';

import { LIST_GET_PAGE_BY_NUMBER } from '../constants';
import { fetchPageByNumber } from '../api';
import { receivePage, pageLoading } from '../actions/list';
import { getCachePage } from '../selectors';
import { addPageToCache } from '../actions/cachePages';
import { errorMessage } from '../actions/messages';

export function* getPageByNumberSaga({ pageNumber }) {
  const page = yield select(getCachePage(pageNumber));

  if (page) {
    yield put(receivePage(page));
    return;
  }

  yield put(pageLoading());

  try {
    const newPage = yield call(fetchPageByNumber, pageNumber);

    yield put(receivePage(newPage));
    yield put(addPageToCache({ [pageNumber]: newPage }));
  } catch (error) {
    yield put(errorMessage(error));
  }
}

export default function* () {
  yield takeLatest(LIST_GET_PAGE_BY_NUMBER, getPageByNumberSaga);
}
