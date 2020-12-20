import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { api } from '../../services/spotify';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  token?: string;
}

export interface IAlbum {
  images: Array<any>;
  artists: Array<any>;
  tracks: Array<any>;
  name: string;
  label: string;
}

const Album: React.FC<InputProps> = props => {
  const router: NextRouter = useRouter();
  const [album, setAlbum] = useState({
    name: '',
    label: '',
    images: [],
    artists: [],
    tracks: {
      items: [],
    },
  });

  const getAlbum = () => {
    api
      .get(`albums/${router.query.pid}`, {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then(response => {
        setAlbum(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <>
      <div>
        <div>
          <Link href={`/`} as={`/`}>
            <a>Voltar</a>
          </Link>
        </div>
        {album.images.length > 0 && <img src={album.images[0].url} />}
        <div>{album.name}</div>
        <div>{album.artists.length > 0 && album.artists[0].name}</div>
        <div>{album.label}</div>

        <div>
          {album.tracks.items.length > 0 &&
            album.tracks.items.map(track => (
              <div>
                {track.track_number} - {track.name}{' '}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Album;
