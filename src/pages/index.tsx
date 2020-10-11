import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home';
import Busca from '../components/busca'
import Main from '../components/main/index'
import Input from '../components/input'

export default function Home(){

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Input />

      <Busca />

      <Main />

    </Container>
  )
}

