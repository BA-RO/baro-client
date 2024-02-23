import Head from 'next/head';

const META = {
  TITLE: '바로 잡아 바로 쓰는, 바로',
  OG_TITLE: '바로',
  DESCRIPTION: '바로 잡아 바로 쓰는, 바로',
  URL: 'https://ba-ro.co.kr',
  KEYWORD: 'baro 바로',
  IMAGE: 'https://image.ba-ro.co.kr/ba-ro.png',
  TYPE: 'website',
  SITE_NAME: 'baro',
};

const SEO = () => {
  return (
    <Head>
      <title>{META.TITLE}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content={META.DESCRIPTION} />
      <meta name="keyword" content={META.KEYWORD} />
      <meta property="og:type" content={META.TYPE} />
      <meta property="og:url" content={META.URL} />
      <meta property="og:title" content={META.OG_TITLE} />
      <meta property="og:description" content={META.DESCRIPTION} />
      <meta property="og:image" content={META.IMAGE} />
      <meta property="og:site_name" content={META.SITE_NAME} />

      <meta name="twitter:title" content={META.OG_TITLE} />
      <meta name="twitter:description" content={META.DESCRIPTION} />
      <meta name="twitter:image" content={META.IMAGE} />
    </Head>
  );
};

export default SEO;
