import React, { useContext, useEffect, useState } from 'react';

import FilmeContext from '../../contexts/filme'

import { Container, CardStyled, Wrapper, Description } from './styles';
import image from '../../assets/filme.jpg'

export default function Card(){
  const { filmesData } = useContext(FilmeContext);
  console.log(filmesData)

  return (
    <Container>
      <Wrapper>

      { filmesData?.results?.map(filme => (
        <CardStyled key={filme.id}>
          <img src={image} width={100} height={130} />

          <Description>
            <h1>{filme?.title}</h1>
            <h2>{filme.release_date}</h2>
            <p>
              {filme.overview}
            </p>
          </Description>
        </CardStyled>
      )) }
      </Wrapper>
    </Container>
  );
}
