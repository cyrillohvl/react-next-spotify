import { AppProps } from 'next/app';
import GlobalStyles from '../styles/global';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [token, setToken] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const checkStorage = key => {
    const storedToken = localStorage.getItem(key);

    if (storedToken) {
      const tokenObject = JSON.parse(storedToken);
      setToken(tokenObject.access_token);
    }
  };

  useEffect(() => {
    checkStorage('@react-app/accessToken');

    const handler = ({ key }) => checkStorage(key);
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
      <Component
        {...pageProps}
        setToken={setToken}
        token={token}
        setSearchResults={setSearchResults}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        searchResults={searchResults}
      />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
