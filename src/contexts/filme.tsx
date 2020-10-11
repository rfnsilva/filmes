import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'

interface Filmes {
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
interface Results {
  page: number
  results: Filmes[]
  total_pages: number
  total_results: number
}

//interface com todos os metodos necessarios
interface FilmeContextData {
  filmesData: Results | null;
  getFilmes(filme: string): Promise<object>;
  getPopulares(): Promise<Results>;
}

//criando context com tipo da interface acima
const FilmeContext = createContext<FilmeContextData>({} as FilmeContextData);

//criando provedor que servirá a aplicação
export const AuthProvider: React.FC = ({ children }) => {
  const [filmesData, setFilmesData] = useState<Results | null>(null);

  //função que realiza o cadastro
  async function getFilmes(filme: string): Promise<Results>{
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&query=${filme}&page=1&include_adult=false`)
    const data = await response.data;

    setFilmesData(data);

    return data;
  }

  //função que realiza o cadastro
  async function getPopulares(): Promise<Results>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&page=1`)
    const data = await response.data;

    setFilmesData(data);

    return data;
  }

  return (
    <FilmeContext.Provider
      value={{
        filmesData,
        getFilmes,
        getPopulares
      }}
    >
      {children}
    </FilmeContext.Provider>
  );
}

export default FilmeContext;
