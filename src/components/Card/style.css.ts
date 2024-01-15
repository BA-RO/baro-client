import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const wrapper = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '28px',
    borderRadius: '16px',
  },
  variants: {
    color: {
      blue: {
        backgroundColor: `${COLORS['Blue/Default']}20`,
      },
      green: {
        backgroundColor: `${COLORS['Green']}20`,
      },
      yellow: {
        backgroundColor: `${COLORS['Yellow']}20`,
      },
      red: {
        backgroundColor: `${COLORS['LightRed']}20`,
      },
      orange: {
        backgroundColor: `${COLORS['Orange']}20`,
      },
      purple: {
        backgroundColor: `${COLORS['Purple']}20`,
      },
      grey: {
        backgroundColor: `${COLORS['Grey/600']}10`,
      },
      white: {
        backgroundColor: `${COLORS['Grey/White']}20`,
      },
    },
  },
});

export const menu = style({
  position: 'absolute',
  display: 'flex',
  gap: '14px',
  top: '16px',
  right: '16px',
  padding: '8px',
});

export const header = style([
  sprinkles({ typography: '15/Title/Medium' }),
  {
    display: 'flex',
    gap: '8px',
    color: COLORS['Grey/400'],
    wordBreak: 'keep-all',
  },
]);

export const body = style([
  sprinkles({ typography: '15/Body/Regular' }),
  {
    wordBreak: 'keep-all',
  },
]);

export const footer = style([
  sprinkles({ typography: '14/Body/Regular' }),
  {
    marginBottom: '-8px',
    paddingTop: '16px',
    borderTop: `1px solid ${COLORS['Dim/6']}`,
    color: COLORS['Grey/400'],
  },
]);

export const count = style([
  sprinkles({ typography: '14/Caption/Medium' }),
  {
    color: COLORS['Grey/500'],
  },
]);
