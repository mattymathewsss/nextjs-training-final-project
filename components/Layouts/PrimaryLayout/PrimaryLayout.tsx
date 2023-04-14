import Header from 'components/Header/Header';
import Head from 'next/head';
import { type ReactNode } from 'react';

export interface IPrimaryLayout {
  children: ReactNode,
  // justify?: 'items-center' | 'items-start'
}

const PrimaryLayout: React.FC<IPrimaryLayout> = (
  { children, 
    // justify = 'items-center' 
  }
  ) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div className='min-h-screen flex flex-col' suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        {/* <div className="m-auto" /> */}
      </div>
    </>
  );
};

export default PrimaryLayout;