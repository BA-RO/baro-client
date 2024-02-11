import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const container = style({
  position: 'absolute',
  right: '16px',
  top: '54px',
  backgroundColor: 'white',
  width: '100px',
  display: 'flex',
  flexDirection: 'column',
  padding: '8px',
  gap: '8px',
  borderRadius: '12px',
  boxShadow: '0px 8px 15px 0px rgba(28, 28, 28, 0.08)',
  zIndex: 2,
});

export const button = style([
  sprinkles({ typography: '15/Body/Regular' }),
  {
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':hover': {
      color: COLORS['Grey/400'],
      backgroundColor: COLORS['Grey/100'],
      fontWeight: 500,
    },
  },
]);
