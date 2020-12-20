import React, { InputHTMLAttributes, useState } from 'react';
import { api, authorizeUri } from '../services/spotify';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  token?: string;
  setSearchTerm?: any;
  setSearchResults?: any;
  handleSearchInput?: any;
  searchTerm?: string;
}

const Search: React.FC<InputProps> = props => {
  const searchType = ['track', 'artist', 'album'];

  const handleSearchInput = event => {
    if (event.target.value.length > 2) {
      props.setSearchTerm(event.target.value);
      handleSearch();
    }
  };

  const handleSearch = () => {
    api
      .get(`search?q=${props.searchTerm}&type=${searchType.join(',')}`, {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then(response => {
        props.setSearchResults(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="search">
      <label htmlFor="search">Busque por álbuns</label>
      <input
        type="text"
        placeholder="Comece a escrever..."
        onInput={handleSearchInput}
      />
    </div>
  );
};

export default Search;
