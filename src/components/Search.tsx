import React from 'react';

const Search: React.FC = () => {
  return (
    <>
      <label htmlFor="search">Busque por álbuns</label>
      <input type="text" placeholder="Comece a escrever..." id="search" />
    </>
  );
};

export default Search;
