import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const folder = style({
  minWidth: '200px',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  gap: '4px',
  whiteSpace: 'nowrap',
});

export const userFolder = recipe({
  base: [
    sprinkles({ typography: '16/Title/Medium' }),
    utils.flexAlignCenter,
    {
      gap: '5px',
      padding: '14px 20px',
      borderRadius: '8px',
      transition: 'all 100ms ease-in-out',

      ':hover': {
        fontWeight: 700,
        color: COLORS['Grey/900'],
        backgroundColor: COLORS['Grey/100'],
      },
    },
  ],
  variants: {
    isActive: {
      true: {
        fontWeight: 700,
        color: COLORS['Blue/Default'],
        backgroundColor: COLORS['Grey/White'],
      },
      false: {
        backgroundColor: COLORS['Grey/White'],
      },
    },
  },
});

export const badge = style([
  sprinkles({ typography: '11/Caption/Medium' }),
  {
    padding: '3px 6px',
    borderRadius: '100px',
    color: COLORS['Blue/Default'],
    backgroundColor: COLORS['Blue/Light'],
  },
]);

export const icon = style({
  fill: COLORS['Grey/250'],
});

export const createFolderButton = style([
  sprinkles({ typography: '16/Title/Medium' }),
  utils.flexAlignCenter,
  {
    width: '100%',
    gap: '4px',
    padding: '10px 20px',
    borderRadius: '8px',
    color: COLORS['Grey/400'],

    ':hover': {
      backgroundColor: COLORS['Grey/100'],
    },
  },
]);
