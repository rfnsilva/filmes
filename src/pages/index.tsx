import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import { Container } from '../styles/pages/Home';
import Busca from '../components/busca'
import Main from '../components/main/index'
import Input from '../components/input'

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

