import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  const url = 'https://accounts.spotify.com/authorize';
  const redirectUri = 'http://localhost:3000/callback';
  const clientId = '9080f38712b445109b6acc871c082c87';
  const scopes = ['user-read-currently-playing', 'user-read-playback-state'];

  const urlArgs = [
    `client_id=${clientId}`,
    `redirect_uri=${redirectUri}`,
    `scope=${scopes.join('%20')}`,
    `response_type=token`,
  ];

  return (
    <>
      <Link href={`${url}?${urlArgs.join('&')}`}>
        <a>Fazer login no Spotify</a>
      </Link>
    </>
  );
};

export default Login;
