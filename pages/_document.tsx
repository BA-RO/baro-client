import { Head, Html, Main, NextScript } from 'next/document';

import { PORTAL_ID } from '@/src/constants/portalId';

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id={PORTAL_ID['TOOLTIP']} />
        <div id={PORTAL_ID['MODAL']} />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
