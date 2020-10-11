import React,{ useContext, useEffect, useState } from 'react';

import FilmeContext from '../../contexts/filme'

import { Container } from './styles';
import Card from '../card';


export default function Main(){
  const { getPopulares } = useContext(FilmeContext);

  useEffect(() => {
    async function loadStorageData() {
      const response = await getPopulares();
    }

    loadStorageData();

  }, []);

  return (
    <Container>
      <Card />
    </Container>
  );
}
