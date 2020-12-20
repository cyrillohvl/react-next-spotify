import React, { useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';

const Callback: React.FC = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router) {
      const accessToken = window.location.hash
        .substring(1)
        .split('&')
        .reduce(function (initial, item) {
          if (item) {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
          }
          return initial;
        }, {});

      if ('access_token' in accessToken) {
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 5);

        localStorage.setItem(
          '@react-app/expirationDate',
          JSON.stringify(expirationDate),
        );

        localStorage.setItem(
          '@react-app/accessToken',
          JSON.stringify(accessToken),
        );
      }
    }

    router.push('/');
  }, []);

  return <div>Redirecionando...</div>;
};

export default Callback;
