import { createVar, style } from '@vanilla-extract/css';

export const marginBottom = createVar();
export const scrollMarginBottom = createVar();

export const container = style({
  padding: '0 40px',
  marginBottom,
  scrollMarginBottom,

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const inputWrapper = style({
  position: 'fixed',
  left: '50%',
  bottom: 0,
  width: '100%',
  maxWidth: '1120px',
  padding: '56px 0',
  transform: 'translateX(-50%)',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
  zIndex: 10,

  '@media': {
    'screen and (max-width: 1200px)': {
      padding: '56px 40px',
    },
  },
});
