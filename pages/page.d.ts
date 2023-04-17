import { type NextPage } from 'next';
import { type ComponentType, type ReactNode } from 'react';

export type NextPageWithLayout<P = {unknown}> = NextPage<P> & {
  getLayout?: () => ReactNode;
  layout?: ComponentType;
};