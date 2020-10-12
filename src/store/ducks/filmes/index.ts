import { Reducer } from 'redux';
import { FilmesState, FilmesTypes } from './types';

const INITIAL_STATE: FilmesState = {
  data: {
    page: undefined,
    total_pages: undefined,
    results: [],
    total_results: undefined
  },
  error: false,
  loading: false,
};

const reducer: Reducer<FilmesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FilmesTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case FilmesTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };

    case FilmesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: {page: undefined,total_pages: undefined,results: [],total_results: undefined},
      };

    default:
      return state;
  }
};

export default reducer;
