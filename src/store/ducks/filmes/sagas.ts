import { call, put } from 'redux-saga/effects';
import { apiPopulares } from '../../../services/apiPopulares';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(apiPopulares.get, '/');
    //console.log(response)

    //const response = yield useAxios<FilmesResults>('https://api.themoviedb.org/3/movie/popular?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&page=1');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
