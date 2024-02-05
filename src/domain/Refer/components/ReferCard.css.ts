import { style } from '@vanilla-extract/css';

export const hover = style({
  fill: '#a8aaad',
  ':hover': {
    fill: '#2e2e2e',
  },
});
