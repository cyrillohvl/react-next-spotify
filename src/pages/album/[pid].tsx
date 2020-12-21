import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { api } from '../../services/spotify';
import PlayButton from '../../assets/play-button.svg';

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
    id: '',
    name: '',
    label: '',
    images: [],
    artists: [],
    tracks: {
      items: [],
    },
  });

  const [playing, setPlaying] = useState('');

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

  const handlePlay = event => {
    const audioPlayer: HTMLVideoElement = document.getElementById(
      event.currentTarget.dataset.id,
    ) as HTMLVideoElement;

    if (event.currentTarget.dataset.name == playing) {
      audioPlayer.pause();
      setPlaying('');
    } else {
      var sounds = document.getElementsByTagName('audio');
      for (let i = 0; i < sounds.length; i++) sounds[i].pause();

      setPlaying(event.currentTarget.dataset.name);
      audioPlayer.play();
    }
  };

  return (
    <>
      <div className="albumPage">
        <div>
          <Link href={`/`} as={`/`}>
            <a>Voltar</a>
          </Link>
        </div>
        {playing && <div className="playing">Tocando agora: {playing}</div>}
        <div className="container">
          <div className="details">
            {album.images.length > 0 && <img src={album.images[0].url} />}
            <h1 className="name">{album.name}</h1>
            <h2 className="artist">
              {album.artists.length > 0 && album.artists[0].name}
            </h2>
            <div className="label">{album.label}</div>
          </div>

          <div className="tracksList">
            {album.tracks.items.length > 0 &&
              album.tracks.items.map(track => (
                <div>
                  <audio id={`track-${track.track_number}-${album.id}`}>
                    <source src={track.preview_url} type="audio/mpeg"></source>
                  </audio>
                  <div className="trackName">
                    {track.preview_url && (
                      <span
                        onClick={handlePlay}
                        data-id={`track-${track.track_number}-${album.id}`}
                        data-name={track.name}
                      >
                        <PlayButton />
                      </span>
                    )}{' '}
                    {track.track_number} - {track.name}
                  </div>{' '}
                  <hr />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
