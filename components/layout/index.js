import Head from 'next/head';
import { Slide, ToastContainer } from 'react-toastify';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Authentication App, NextJS and Firebase.'
        />
      </Head>
      <ToastContainer position='top-center' transition={Slide} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
