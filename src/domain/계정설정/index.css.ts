import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const container = style({
  width: '592px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
});

export const profileWrapper = style({
  marginTop: '32px',
  display: 'flex',
  justifyContent: 'center',
});

export const profileImageWrapper = style({
  position: 'relative',
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'center',
});

export const profileImagePostfix = style({
  position: 'absolute',
  bottom: '0',
  right: 'calc(50% - 54px)',
  cursor: 'pointer',
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
