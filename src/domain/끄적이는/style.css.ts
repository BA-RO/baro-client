import { style } from '@vanilla-extract/css';

export const container = style({
  height: `calc(100vh - 56px)`,
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
});
