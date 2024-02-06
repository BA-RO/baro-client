import { style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const spell = style({
  fontWeight: 600,
  color: COLORS['Red'],
});

export const space = style({
  fontWeight: 600,
  color: COLORS['Green'],
});

export const doubt = style({
  fontWeight: 600,
  color: COLORS['Purple'],
});

export const card = style({
  display: 'flex',
  marginTop: '18px',
});

export const spellCheckBox = style({
  marginRight: '16px',
});

export const suggestion = style({
  marginTop: '14px',
  padding: '12px',
  borderRadius: '12px',
  backgroundColor: COLORS['Grey/White'],
});

export const buttonGroup = style({
  height: 'fit-content',
  display: 'flex',
  gap: '16px',
});

export const icon = style({
  transition: 'all 100ms ease-in-out',
  fill: COLORS['Grey/300'],

  ':hover': {
    fill: COLORS['Grey/900'],
  },
});
