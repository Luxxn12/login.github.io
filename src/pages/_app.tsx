import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, Stack } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { useShallowEffect } from "@mantine/hooks"
import { sUser } from '@/g_state/g_state';
import _ from "lodash"
import Login from '@/auth/login';
import { Toaster } from 'react-hot-toast';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Toaster />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </MantineProvider>
    </>
  );
}

const AuthProvider = ({ children }: PropsWithChildren) => {
  useShallowEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      sUser.value = {}
    } else {
      sUser.value = JSON.parse(user)
    }
  }, [])
  if (sUser.value == null) return <></>
  if (_.isEmpty(sUser.value)) return <><Login /></>
  return <>
    {children}
  </>
}