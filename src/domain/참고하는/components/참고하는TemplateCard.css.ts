import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const wrapper = style([
  sprinkles({
    width: {
      small: 336,
      middle: 322,
      large: 389,
    },
  }),
  {
    padding: '28px 32px 20px',
  },
]);

export const hover = style({
  transition: 'fill 100ms ease-in-out',
  ':hover': {
    fill: COLORS['Grey/600'],
  },
});
