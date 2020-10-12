import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import store from '../store'

import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
