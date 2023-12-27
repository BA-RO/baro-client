import { globalStyle } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box',
});

globalStyle(
  'html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, em, img, ins, kbd, q, s, samp, small, strike, strong, article, footer, header, main, nav, section',
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '16px',
    verticalAlign: 'baseline',
    fontFamily: theme.font.pretendard,
  },
);

globalStyle('body', {
  lineHeight: 1,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  wordBreak: 'keep-all',
  whiteSpace: 'pre-wrap',
});

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section',
  {
    display: 'block',
  },
);

globalStyle('ol, ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

globalStyle('button, select, input, textarea', {
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
  fontFamily: theme.font.pretendard,
});

globalStyle('a, button', {
  cursor: 'pointer',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button', {
  padding: 0,
});
