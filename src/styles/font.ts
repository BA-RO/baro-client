import localFont from 'next/font/local';

export const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  preload: true,
  fallback: [
    'Pretendard Variable',
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export const gmarket = localFont({
  src: [
    {
      path: '../../public/fonts/GmarketSansLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GmarketSansMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GmarketSansBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
});
