import React from 'react';
import Link from 'next/link';
import { authorizeUri, api } from '../services/spotify';

const Login: React.FC = () => {
  return (
    <div className="login" data-testid="login">
      <Link href={authorizeUri}>
        <a>Fazer login no Spotify</a>
      </Link>
    </div>
  );
};

export default Login;
