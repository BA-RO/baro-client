import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const container = style({
  marginBottom: '48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',
});

export const dateLabelWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '12px',
  marginBottom: '24px',
});

export const dateLabel = style({
  padding: '6px 28px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${COLORS['Grey/200']}`,
  borderRadius: '100px',
});

export const dateLabelText = style({
  marginLeft: '6px',
  color: COLORS['Grey/700'],
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: '24px',
  letterSpacing: '-0.2px',
});

export const contentWrapper = style({
  display: 'flex',
  gap: '16px',
});
