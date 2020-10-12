import { call, put } from 'redux-saga/effects';
import apiPopulares from '../../../services/apiPopulares';

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
