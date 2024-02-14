import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const editContainer = style({
  backgroundColor: 'white',
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
});

export const editInput = style([
  sprinkles({
    typography: '15/Body/Regular',
  }),
  {
    width: '100%',
    marginBottom: '8px',
    resize: 'none',
    overflowWrap: 'break-word',
    maxHeight: '217px',
  },
]);

export const editInputTextCount = style({
  height: '17px',
  textAlign: 'end',
  color: COLORS['Grey/400'],
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '0.2px',
});

export const editTextCurrentCount = style({
  color: COLORS['Blue/Default'],
  fontWeight: '700',
});
