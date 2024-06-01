import React from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from 'src/contexts/ThemeContext';

import '@styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
