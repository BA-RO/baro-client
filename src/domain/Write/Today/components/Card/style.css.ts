import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const icon = style({
  transition: 'all 100ms ease-in-out',
  fill: COLORS['Grey/300'],

  ':hover': {
    fill: COLORS['Grey/900'],
  },
});
