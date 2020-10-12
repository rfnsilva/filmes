import { call, put } from 'redux-saga/effects';
import { apiPopulares, apiSearch } from '../../../services/apiPopulares';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(apiPopulares.get, '/');
    //console.log(response)

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* up(search: string) {
  console.log('search')
  try {
    const response = yield call(apiSearch.get, `&query=${search}&page=1&include_adult=false`);
    console.log(response)

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
