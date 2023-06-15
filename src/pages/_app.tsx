import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import AuthLayout from '~/components/layouts/AuthLayout';
import ConsoleLayout from '~/components/layouts/ConsoleLayout';
import { rootTheme } from '~/helpers/themes';
import '~/styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const getLayout =
    Component.getLayout ||
    ((page) => {
      // Authentication Pages Layout
      if (router.pathname.startsWith('/auth/')) {
        return <AuthLayout>{page}</AuthLayout>;
      }

      // Dashboard Pages Layout
      if (router.pathname.startsWith('/console')) {
        return <ConsoleLayout>{page}</ConsoleLayout>;
      }

      return page;
    });

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={rootTheme}>
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </SessionProvider>
    </>
  );
}
