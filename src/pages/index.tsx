import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Login from '../components/Login';
import Header from '../components/Header';

const Home: React.FC = () => {
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
    <div>
      <Head>
        <title>React Spotify by Patrick Coutinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {token && (
        <Header
          token={token}
          setSearchResults={setSearchResults}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          searchResults={searchResults}
        />
      )}

      <main>{(!token || token == '') && <Login />}</main>

      <footer>React Spotify by Patrick Coutinho</footer>
    </div>
  );
};

export default Home;
