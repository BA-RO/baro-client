import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@styles/tokens';

export const inputTitle = style({
  marginBottom: '12px',
  color: COLORS['Grey/600'],
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '-0.5px',
});

export const input = recipe({
  base: {
    backgroundColor: 'white',
    width: '100%',
    height: '54px',
    padding: '12px 16px',
    borderRadius: '8px',
    color: COLORS['Grey/900'],
    fontSize: '17px',
    fontWeight: '500',
    lineHeight: '27px',
    letterSpacing: '-0.3px',

    '::placeholder': {
      color: COLORS['Grey/250'],
      fontSize: '17px',
      fontWeight: '500',
      lineHeight: '27px',
      letterSpacing: '-0.3px',
    },
  },
  variants: {
    hasError: {
      true: {
        border: `1.5px solid ${COLORS['Red']}`,
      },
    },
  },
});

export const errorMsg = style({
  marginTop: '13.5px',
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '17px',
  letterSpacing: '-0.5px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});
