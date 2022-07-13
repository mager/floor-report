import React, {useEffect, useState} from 'react';
import {createThemedStyled, ThemeProvider} from 'baseui';
import useDarkMode from 'use-dark-mode';
import {ThemeProvider as NextThemeProvider} from 'next-themes';

import {createLightTheme, createDarkTheme} from 'baseui';
import {Theme} from 'baseui/theme';

type BaseBreakpoints = {
  small: number;
  medium: number;
  large: number;
};

type BaseMediaQuery = {
  small: string;
  medium: string;
  large: string;
};

type CustomBreakpoints = {
  xxLarge: number;
};

type CustomMediaQuery = {
  xxLarge: string;
};

const breakpoints = {
  small: 320,
  medium: 640,
  large: 1408,
};
const ResponsiveTheme = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc.mediaQuery[
      key
    ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
    return acc;
  },
  {
    breakpoints,
    mediaQuery: {},
  },
);

export type CustomThemeT = Theme & {
  // other custom values
  breakpoints: BaseBreakpoints & CustomBreakpoints;
  mediaQuery: BaseMediaQuery & CustomMediaQuery;
};

export const themedStyled = createThemedStyled<CustomThemeT>();

const primitives = {
  primaryFontFamily: 'Titillium Web',
};

const overrides = {
  colors: {
    contentPositive: '#2ed94a',
    linkVisited: '#000',
  },
  typography: {
    // H1
    font1050: {
      fontFamily: 'Coustard',
      fontWeight: 'bold',
    },
    // H2
    font950: {
      fontFamily: 'Coustard',
    },
    // H3
    font850: {
      fontFamily: 'Coustard',
    },
    // H4
    font750: {
      fontFamily: 'Coustard',
    },
    font1150: {
      fontFamily: 'Coustard',
    },
    font1350: {
      fontFamily: 'Coustard',
    },
  },
};

const lightTheme = {
  ...{name: 'light'},
  ...createLightTheme(primitives, overrides),
  ...ResponsiveTheme,
};
const darkTheme = {
  ...{name: 'dark'},
  ...createDarkTheme(primitives, overrides),
  ...ResponsiveTheme,
};

const Providers = ({children}) => {
  const {value} = useDarkMode(false, {storageKey: null, onChange: null});
  const theme = value ? darkTheme : lightTheme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme as CustomThemeT}>
      <NextThemeProvider>{children}</NextThemeProvider>
    </ThemeProvider>
  );

  // Prevents SSR flash for mismatched dark mode
  if (!mounted) {
    return <div style={{visibility: 'hidden'}}>{body}</div>;
  }

  return body;
};

export default Providers;
