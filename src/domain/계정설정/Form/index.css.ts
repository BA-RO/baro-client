import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const container = style({
  display: ' flex',
  flexDirection: 'column',
  padding: '40px 64px',
  gap: '32px',
  borderRadius: '16px',
  backgroundColor: COLORS['Grey/100'],
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
