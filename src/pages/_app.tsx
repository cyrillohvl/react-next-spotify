import { AppProps } from 'next/app';
import GlobalStyles from '../styles/global';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { validateTokenExpiration, authorizeUri } from '../services/spotify';
import { NextRouter, useRouter } from 'next/router';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router: NextRouter = useRouter();

  const [token, setToken] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const checkStoredToken = () => {
    const storedToken = localStorage.getItem('@react-app/accessToken');
    const storedExpiration = localStorage.getItem('@react-app/expirationDate');

    if (storedToken && storedExpiration) {
      const tokenObject = JSON.parse(storedToken);

      if (validateTokenExpiration(storedExpiration)) {
        setToken(tokenObject.access_token);
        console.log('aqui2');
      } else {
        console.log('aqui');
        // window.location.href = authorizeUri;
        localStorage.removeItem('@react-app/accessToken');
        localStorage.removeItem('@react-app/expirationDate');
      }
    }
  };

  useEffect(() => {
    checkStoredToken();

    const handler = ({ key }) => checkStoredToken();
    window.addEventListener('storage', handler);

    return () => window.removeEventListener('storage', handler);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header
        token={token}
        setSearchResults={setSearchResults}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        searchResults={searchResults}
      />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component
        {...pageProps}
        setToken={setToken}
        token={token}
        setSearchResults={setSearchResults}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        searchResults={searchResults}
      />

      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
