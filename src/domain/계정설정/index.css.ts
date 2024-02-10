import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const container = style({
  width: '592px',
  margin: '0 auto',
});

export const textButtonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const textButton = style({
  padding: '16px 24px',
  color: COLORS['Grey/500'],
  fontSize: '17px',
  fontWeight: '500',
  lineHeight: '27px',
  letterSpacing: '-0.3px',
});
