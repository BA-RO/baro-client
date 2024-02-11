import { style } from '@vanilla-extract/css';

export const container = style({
  height: `calc(100vh - 131px)`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  marginBottom: '56px',
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
  bottom: '56px',
  width: '100%',
  maxWidth: '1200px',
});
