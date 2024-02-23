import { style } from '@vanilla-extract/css';

export const container = style({
  height: `calc(100vh - 131px)`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '0 40px',
  marginBottom: '64px',
});

export const content = style({
  overflow: 'scroll',
  paddingBottom: '48px',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const inputWrapper = style({
  position: 'fixed',
  left: '50%',
  bottom: '56px',
  width: '100%',
  transform: 'translateX(-50%)',
  maxWidth: '1120px',

  '@media': {
    'screen and (max-width: 1200px)': {
      padding: '0 40px',
    },
  },
});
