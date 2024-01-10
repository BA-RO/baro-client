import { Head, Html, Main, NextScript } from 'next/document';
import { PORTAL_ID } from '@constants/portalId';

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        {Object.values(PORTAL_ID).map((value, index) => (
          <div key={index} id={value} />
        ))}
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
