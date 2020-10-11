import React, { useContext } from 'react';

import FilmeContext from '../../contexts/filme'

import { Container, Wrapper, Title, Results } from './styles';

const busca: React.FC = () => {
  const { filmesData } = useContext(FilmeContext);

  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>Resultado da busca</h1>
        </Title>

        <Results>
          <a href="#">Filmes <span>{filmesData?.results.length}</span></a>
          <a href="#">Series</a>
          <a href="#">Pessoas</a>
          <a href="#">Coletânias</a>
          <a href="#">Palavras chaves</a>
        </Results>
      </Wrapper>
    </Container>
  );
}

export default busca;
