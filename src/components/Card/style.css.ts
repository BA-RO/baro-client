import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const wrapper = recipe({
  base: {
    height: 'fit-content',
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
        backgroundColor: COLORS['Blue/Light'],
      },
      green: {
        backgroundColor: COLORS['Green/Light'],
      },
      yellow: {
        backgroundColor: COLORS['Yellow/Light'],
      },
      red: {
        backgroundColor: COLORS['Red/Light'],
      },
      orange: {
        backgroundColor: COLORS['Orange/Light'],
      },
      purple: {
        backgroundColor: COLORS['Purple/Light'],
      },
      grey: {
        backgroundColor: COLORS['Grey/100'],
      },
      white: {
        backgroundColor: `${COLORS['Grey/White']}`,
      },
    },
  },
});

export const menu = style({
  position: 'absolute',
  display: 'flex',
  gap: '16px',
  top: '16px',
  right: '16px',
  padding: '8px',
  zIndex: 10,
});

export const header = style([
  sprinkles({ typography: '15/Title/Medium' }),
  {
    position: 'relative',
    display: 'flex',
    gap: '8px',
    color: COLORS['Grey/400'],
    wordBreak: 'keep-all',
  },
]);

export const body = style([
  sprinkles({ typography: '15/Body/Regular' }),
  {
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
  },
]);

export const footer = style([
  sprinkles({ typography: '14/Body/Regular' }),
  {
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
