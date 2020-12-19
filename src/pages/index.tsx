import Head from 'next/head';
import { Styled } from 'theme-ui';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>React Spotify by Patrick Coutinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Styled.h1>
          React Spotify <small>by Patrick Coutinho</small>
        </Styled.h1>
        <Styled.p>
          Este é um teste com um <small className="small">small text</small>
        </Styled.p>
      </main>
    </div>
  );
};

export default Home;
