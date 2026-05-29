import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

import {LocaleProvider} from '../context/LocaleContext';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
});

export default MyApp;
