import { all, takeLatest } from 'redux-saga/effects';

import { FilmesTypes } from './filmes/types';
import { load } from './filmes/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(FilmesTypes.LOAD_REQUEST, load),
  ]);
}
