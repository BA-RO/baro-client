import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const container = style({
  display: ' flex',
  flexDirection: 'column',
  padding: '40px 64px',
  marginTop: '32px',
  marginBottom: '16px',
  gap: '32px',
  borderRadius: '16px',
  backgroundColor: COLORS['Grey/100'],
});

export const authContainer = style({
  backgroundColor: 'white',
  padding: '12px 16px',
  height: '54px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const authTypeEmail = style({
  fontSize: '17px',
  fontWeight: '500',
  lineHeight: '27px',
  letterSpacing: '-0.3px',
});

export const submitButton = style({
  backgroundColor: COLORS['Blue/Default'],
  borderRadius: '8px',
  height: '56px',
  color: 'white',
  fontSize: '16px',
  fontWeight: '700',
  cursor: 'pointer',
});
