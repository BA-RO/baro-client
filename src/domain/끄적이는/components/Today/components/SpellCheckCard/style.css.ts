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
  marginTop: '16px',
});

export const suggestion = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '12px',
  padding: '18px',
  borderRadius: '12px',
  backgroundColor: COLORS['Grey/White'],
});

export const spellCheckBox = style({
  marginRight: '16px',
});

export const buttonGroup = style({
  height: 'fit-content',
  display: 'flex',
  gap: '16px',
});

export const icon = style({
  transition: 'fill 100ms ease-in-out',
  fill: COLORS['Grey/300'],

  ':hover': {
    fill: COLORS['Grey/900'],
  },
});
