import React from 'react';

import { Container, CardStyled, Wrapper, Description } from './styles';
import image from '../../assets/filme.jpg'
import { Filmes } from '../../store/ducks/filmes/types';

export default function Card({ filmes }){
  return (
    <Container>
      <Wrapper>

      { filmes?.map(filme => (
        <CardStyled key={filme.id}>
          <img src={image} width={100} height={130} />

          <Description>
            <h1>{ filme.title }</h1>
            <h2>{ filme.release_date }</h2>
            <p>
              { filme.overview }
            </p>
          </Description>
        </CardStyled>
      )) }

      </Wrapper>
    </Container>
  );
}
