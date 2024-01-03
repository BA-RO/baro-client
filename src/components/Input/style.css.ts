import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@/src/styles/tokens';

export const inputHeight = createVar();

export const input = recipe({
  base: [
    {
      borderRadius: '8px',
      resize: 'none',
      width: '100%',
      minHeight: '54px',
      padding: '12px 16px',
      height: inputHeight,
      color: COLORS['Grey/900'],
      fontSize: '17px',
      lineHeight: '27px',
      '::placeholder': {
        color: COLORS['Grey/250'],
      },
    },
  ],
  variants: {
    type: {
      primary: { border: `2px solid ${COLORS['Blue/Gradient']}` },
      secondary: {
        backgroundColor: COLORS['Grey/100'],
      },
    },
    error: {
      true: {
        border: `1.5px solid ${COLORS['Red']}`,
      },
    },
  },
});

export const alert = recipe({
  base: [
    {
      display: 'flex',
      alignItems: 'center',
      marginTop: '12px',
    },
  ],
});

export const alertMsg = recipe({
  base: [
    {
      marginLeft: '6px',
      color: COLORS['Grey/600'],
      fontSize: '13px',
      fontWeight: '600',
      lineHeight: '17px',
    },
  ],
});
