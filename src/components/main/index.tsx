import React,{ useContext, useEffect, useState } from 'react';
import { Cookie } from 'next-cookie';
import axios from 'axios'

import { Container, Wrapper, Card, Description } from './styles';
import image from '../../assets/filme.jpg'

import FilmeContext from '../../contexts/filme'

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

export default function Main(){
  const [filmes, setFilmes] = useState<Filmes[] | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&page=1`)
      const data = await response.data;

      const cookie = new Cookie();
      cookie.set('filmes', data.results)

      setFilmes(data.results)
    }

    loadStorageData();
  }, []);

  console.log(filmes)

  return (
    <Container>
      <Wrapper>

      { filmes?.map(filme => (
        <Card key={filme.id}>
          <img src={image} width={100} height={130} />

          <Description>
            <h1>{filme?.title}</h1>
            <h2>{filme?.release_date}</h2>
            <p>
              {filme?.overview}
            </p>
          </Description>
        </Card>
      )) }
      </Wrapper>
    </Container>
  );
}
