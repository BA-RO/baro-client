import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const hover = style({
  transition: 'fill 100ms ease-in-out',

  ':hover': {
    fill: COLORS['Grey/600'],
  },
});
