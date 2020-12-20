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

export const validateTokenExpiration = (expirationDate: string) => {
  const now = new Date();

  let splitedExpiration = expirationDate.split('T');
  const date = splitedExpiration[0].replace('"', '').split('-');

  const expirationDateToCompare = new Date(
    Date.UTC(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2])),
  );

  const hour = splitedExpiration[1].split(':');

  expirationDateToCompare.setUTCHours(
    parseInt(hour[0]),
    parseInt(hour[1]),
    parseInt(hour[2].substring(0, 2)),
  );

  return now < expirationDateToCompare;
};

export const api: AxiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});
