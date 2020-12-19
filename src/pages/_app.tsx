import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/_theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
