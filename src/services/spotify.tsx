import axios, { AxiosInstance } from 'axios';

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

export const authorizeUri: string = `${url}?${urlArgs.join('&')}`;

export const validateTokenExpiration = () => {
  // se o token está expirado
  // redireciono no caller o app para pegar um novo
  return true;
};

export const api: AxiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});
