import React, { InputHTMLAttributes } from 'react';
import Link from 'next/link';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  token?: string;
  searchTerm?: any;
  searchResults?: any;
}

const SearchResults: React.FC<InputProps> = props => {
  return (
    <>
      <div>
        Resultados da busca por <strong>{props.searchTerm}</strong>
      </div>
      <div>
        <div>Álbuns</div>
        {props.searchResults.albums.items.map(album => (
          <div>
            {album.images.length > 0 && (
              <Link href={`/album/[pid]`} as={`/album/${album.id}`}>
                <a>
                  <img src={album.images[0].url} />
                </a>
              </Link>
            )}
            <div>
              <Link href={`/album/[pid]`} as={`/album/${album.id}`}>
                <a>{album.name}</a>
              </Link>
            </div>
            <div>{album.artists[0].name}</div>
          </div>
        ))}
        {/* <hr />
        <div>Músicas</div>
        {props.searchResults.tracks.items.map(track => (
          <div>
            {track.album.images.length > 0 && (
              <img src={track.album.images[0].url} />
            )}
            <div>{track.name}</div>
            <div>{track.album.name}</div>
          </div>
        ))}
        <hr />
        <div>Artistas</div>
        {props.searchResults.artists.items.map(artist => (
          <div>
            {artist.images.length > 0 && <img src={artist.images[0].url} />}
            <div>{artist.name}</div>
            <div>{artist.genres[0]}</div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default SearchResults;
