import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const spellTypeBox = style([
  utils.flexAlignCenter,
  sprinkles({ typography: '13/Body/Regular' }),
  {
    width: 'fit-content',
    gap: '12px',
    marginTop: '16px',
    padding: '12px',
    backgroundColor: '#E0EAFB',
    borderRadius: '8px',
  },
]);

export const indication = recipe({
  base: [
    utils.flexCenter,
    {
      gap: '5px',

      '::before': {
        content: '',
        display: 'block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
      },
    },
  ],
  variants: {
    type: {
      spell: {
        '::before': {
          backgroundColor: COLORS['Red'],
        },
      },
      space: {
        '::before': {
          backgroundColor: COLORS['Green'],
        },
      },
      doubt: {
        '::before': {
          backgroundColor: COLORS['Purple'],
        },
      },
    },
  },
});
