import { MantineThemeOverride } from '@mantine/core';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export const rootTheme: MantineThemeOverride = {
  fontFamily: lato.style.fontFamily,
  colorScheme: 'light',
  radius: { md: '5px', lg: '10px' },
  primaryColor: 'cyan',
  primaryShade: { light: 8 },
};
