import { type NextPage } from 'next';
import { type ComponentType, type ReactElement, type ReactNode } from 'react';

export type NextPageWithLayout<P = {unknown}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};