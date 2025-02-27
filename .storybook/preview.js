import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
//import { AuthProvider } from '../src/context/auth/AuthContext';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import React from 'react';
import '../styles/globals.css';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], index) => {

    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(index + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};