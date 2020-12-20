import React, { InputHTMLAttributes } from 'react';
import Link from 'next/link';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  token?: string;
  searchTerm?: any;
  searchResults?: any;
}

const SearchResults: React.FC<InputProps> = props => {
  return (
    <div className="results">
      <div className="info">
        Resultados da busca por <strong>{props.searchTerm}</strong>
      </div>
      <div className="list">
        {props.searchResults.albums.items.map(album => (
          <div className="item">
            {album.images.length > 0 && (
              <Link href={`/album/[pid]`} as={`/album/${album.id}`}>
                <a>
                  <img src={album.images[0].url} />
                </a>
              </Link>
            )}
            <div className="name">
              <Link href={`/album/[pid]`} as={`/album/${album.id}`}>
                <a>{album.name}</a>
              </Link>
            </div>
            <div className="artist">{album.artists[0].name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
