import { action } from 'typesafe-actions';
import { FilmesTypes, FilmesResults } from './types';

export const loadRequest = () => action(FilmesTypes.LOAD_REQUEST);

export const loadSuccess = (data: FilmesResults) => action(FilmesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(FilmesTypes.LOAD_FAILURE);
