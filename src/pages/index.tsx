import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import Head from 'next/head';
import Login from '../components/Login';
import SearchResults from '../components/SearchResults';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  token?: string;
  setSearchResults?: any;
  setToken?: any;
  setSearchTerm?: any;
  searchTerm?: any;
  searchResults?: any;
}

const Home: React.FC<InputProps> = props => {
  return (
    <>
      <Head>
        <title>React Spotify by Patrick Coutinho</title>
      </Head>

      <main>
        {(!props.token || props.token == '') && <Login />}

        {props.searchResults && props.searchTerm && (
          <SearchResults
            searchTerm={props.searchTerm}
            searchResults={props.searchResults}
          />
        )}
      </main>

      <footer>React Spotify by Patrick Coutinho</footer>
    </>
  );
};

export default Home;
