import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../contexts/filme'

import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
