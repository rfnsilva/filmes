import React from 'react';

import { Container, Wrapper, Title, Results } from './styles';

const busca: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>Resultado da busca</h1>
        </Title>

        <Results>
          <a href="#">Filmes</a>
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