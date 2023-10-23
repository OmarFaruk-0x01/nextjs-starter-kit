import '@mantine/core/styles.css';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import { ReactNode } from 'react';
import CommonLayout from '~/components/layouts/CommonLayout';

export default function App({ Component, pageProps }: any) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => {
      return <CommonLayout>{page}</CommonLayout>;
    });

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Next Js Start Kit</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </MantineProvider>
  );
}
