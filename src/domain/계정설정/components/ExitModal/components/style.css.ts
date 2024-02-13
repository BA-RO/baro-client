import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@styles/tokens';

export const listItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
});

export const listItemText = style({
  color: COLORS['Grey/700'],
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '25px',
  letterSpacing: '-0.3px',
});
