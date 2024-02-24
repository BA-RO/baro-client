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
  bottom: '48px',
  width: '100%',
  transform: 'translateX(-50%)',
  maxWidth: '1120px',
  zIndex: 10,
  '@media': {
    'screen and (max-width: 1200px)': {
      padding: '0 40px',
    },
  },
});
