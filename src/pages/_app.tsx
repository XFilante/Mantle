import { CobaltConfig } from '@/configs';
import { MantineTheme } from '@/configs/theme';
import { CobaltContext } from '@filante/cobalt';

import type { AppProps } from 'next/app';

import '@filante/cobalt/global.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CobaltContext config={CobaltConfig} mantine={MantineTheme}>
        <Component {...pageProps} />
      </CobaltContext>
    </>
  );
}
