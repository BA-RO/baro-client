import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const container = style({
  backgroundColor: COLORS['Grey/100'],
  borderRadius: '16px',
  padding: '28px 32px',
  height: 'fit-content',
});

export const date = style({
  marginBottom: '16px',
  color: COLORS['Grey/400'],
  fontSize: '15px',
  fontWeight: '500',
});

export const value = style([
  sprinkles({ typography: '15/Body/Regular' }),
  {
    marginBottom: '16px',
    color: COLORS['Grey/900'],
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '-0.2px',
  },
]);
