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
    position: 'relative',
    padding: '28px 32px 20px',

    ':hover': {
      boxShadow: '0px 8px 20px 0px rgba(34, 34, 34, 0.08)',
    },
  },
]);

export const count = style({
  fontWeight: 500,
  fontSize: '14px',
  color: COLORS['Grey/500'],
});

export const tooltipButton = style({
  position: 'relative',
  zIndex: 1,
});
