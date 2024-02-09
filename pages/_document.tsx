import { Head, Html, Main, NextScript } from 'next/document';

import { PORTAL_ID } from '@constants/portal';
import { pretendard } from '@styles/font';

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body className={pretendard.className}>
        <Main />
        {Object.values(PORTAL_ID).map((value) => (
          <div key={value} id={value} />
        ))}
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
