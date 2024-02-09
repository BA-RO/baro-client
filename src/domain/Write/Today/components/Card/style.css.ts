import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const icon = style({
  transition: 'fill 100ms ease-in-out',
  fill: COLORS['Grey/300'],

  ':hover': {
    fill: COLORS['Grey/900'],
  },
});

export const skeletonCard = style({
  marginTop: '18px',
});

export const skeletonSuggestion = style({
  marginTop: '12px',
  padding: '18px',
  borderRadius: '12px',
  backgroundColor: COLORS['Grey/White'],
});
