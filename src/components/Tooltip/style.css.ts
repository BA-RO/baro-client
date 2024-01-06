import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/src/styles/sprinkles.css';
import { COLORS, Z_INDEX } from '@/src/styles/tokens';

export const trigger = style({
  width: 'fit-content',
});

export const content = recipe({
  base: [
    sprinkles({ typography: '13/Body/Regular' }),
    {
      position: 'absolute',
      width: 'fit-content',
      color: COLORS['Grey/White'],
      backgroundColor: COLORS['Dim/70'],
      borderRadius: '8px',
      transform: 'translateX(-50%)',
      zIndex: Z_INDEX['tooltip'],
    },
  ],
  variants: {
    hasArrow: {
      false: {
        padding: '8px 12px',
      },
      true: {
        marginTop: '6px',
        padding: '16px',

        '::before': {
          content: '',
          width: 0,
          height: 0,
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          border: `6px solid ${COLORS['Grey/White']}`,
          borderBottomColor: COLORS['Dim/70'],
        },
      },
    },
  },
});
