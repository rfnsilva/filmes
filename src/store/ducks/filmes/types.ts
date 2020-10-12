/**
 * Action types
 */
export enum FilmesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Filmes {
  id: number,
  adult: string,
  backdrop_path: string,
  genre_ids: number[],
  title: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

export interface FilmesResults {
  page: number,
  results: Filmes[],
  total_pages: number,
  total_results: number,
}

/**
 * State type
 */
export interface FilmesState {
  readonly data: FilmesResults,
  readonly loading: boolean,
  readonly error: boolean,
}
