import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const container = style({
  backgroundColor: COLORS['Grey/100'],
  borderRadius: '16px',
  padding: '28px 32px',
  height: 'fit-content',
  position: 'relative',
});

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

export const editCompleteBtn = style([
  sprinkles({
    typography: '15/Body/Medium',
  }),
  {
    position: 'absolute',
    top: '20px',
    right: '32px',
    color: COLORS['Grey/700'],
  },
]);

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

export const date = style({
  marginBottom: '16px',
  color: COLORS['Grey/400'],
  fontSize: '15px',
  fontWeight: '500',
});

export const ctaWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  position: 'absolute',
  top: '20px',
  right: '16px',
});

export const value = style([
  sprinkles({ typography: '15/Body/Regular' }),
  {
    color: COLORS['Grey/900'],
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '-0.2px',
  },
]);

export const icon = style({
  transition: 'fill 100ms ease-in-out',
  fill: COLORS['Grey/300'],

  ':hover': {
    fill: COLORS['Grey/900'],
  },
});
