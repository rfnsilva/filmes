import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { Cookie } from 'next-cookie';

//interface com todos os metodos necessarios
interface FilmeContextData {
  getFilmes(filme: string): Promise<object>;
  getPopulares(): Promise<object[]>;
}

//criando context com tipo da interface acima
const FilmeContext = createContext<FilmeContextData>({} as FilmeContextData);

//criando provedor que servirá a aplicação
export const AuthProvider: React.FC = ({ children }) => {
  const [filme, setFilme] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const cookie = new Cookie();
      const filmesCookie: object = cookie.get('filmes');

      if (filmesCookie) {
        setFilme(filmesCookie);
      }
    }

    loadStorageData();
  }, []);

  //função que realiza o cadastro
  async function getFilmes(filme: string){
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&query=${filme}&page=1&include_adult=false`)
    const data = await response.data;

    const cookie = new Cookie();
    cookie.set('filmes', data.results);
    console.log(cookie)
    console.log(data.results)

    setFilme(data);

    return data;
  }

  //função que realiza o cadastro
  async function getPopulares(){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&page=1`)
    const data = await response.data;

    const cookie = new Cookie();
    cookie.set('filmes', data.results);

    setFilme(data.results);
    console.log('aquiiiiiiiiiiiiiiiiii')

    return data.results;
  }

  return (
    <FilmeContext.Provider
      value={{
        getFilmes,
        getPopulares
      }}
    >
      {children}
    </FilmeContext.Provider>
  );
}

export default FilmeContext;
