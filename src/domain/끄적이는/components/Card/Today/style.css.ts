import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const skeletonCard = style({
  marginTop: '18px',
});

export const skeletonSuggestion = style({
  marginTop: '12px',
  padding: '18px',
  borderRadius: '12px',
  backgroundColor: COLORS['Grey/White'],
});

export const editCompleteButton = style([
  sprinkles({ typography: '13/Title/Semibold' }),
  {
    color: COLORS['Grey/700'],
    marginLeft: 'auto',
    position: 'absolute',
    top: '-6px',
    right: 0,
    padding: '6px 12px',
    borderRadius: '6px',

    ':hover': {
      backgroundColor: COLORS['Grey/200'],
    },
  },
]);
