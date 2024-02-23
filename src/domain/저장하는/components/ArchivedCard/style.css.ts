import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const card = style({
  padding: '28px 32px 20px',
});

export const editButton = style([
  sprinkles({ typography: '13/Title/Semibold' }),
  {
    color: COLORS['Grey/700'],
    marginLeft: 'auto',
    padding: '6px 12px',
    borderRadius: '6px',

    ':hover': {
      backgroundColor: COLORS['Grey/200'],
    },
  },
]);

export const count = style({
  fontWeight: 500,
  fontSize: '14px',
  color: COLORS['Grey/500'],
});
