import { style } from '@vanilla-extract/css';

export const container = style({
  height: `calc(100vh - 131px)`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  marginBottom: '56px',
  padding: '0 30px',
});

export const content = style({
  overflow: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  paddingBottom: '48px',
});

export const inputWrapper = style({
  position: 'fixed',
  left: '50%',
  bottom: '56px',
  width: '100%',
  transform: 'translateX(-50%)',
  maxWidth: '1140px',

  '@media': {
    'screen and (max-width: 1200px)': {
      padding: '0 30px',
    },
  },
});
