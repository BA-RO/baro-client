import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const button = recipe({
  base: [utils.flexAlignCenter],
  variants: {
    state: {
      default: {
        backgroundColor: COLORS['Grey/150'],
        color: COLORS['Grey/600'],
      },
      disabled: {
        backgroundColor: COLORS['Blue/Default'],
        color: COLORS['Grey/White'],
        opacity: '50%',
      },
      enabled: {
        backgroundColor: COLORS['Blue/Default'],
        color: COLORS['Grey/White'],
      },
    },
    size: {
      M: [
        sprinkles({ typography: '15/Title/Medium' }),
        {
          padding: '15px 24px',
          borderRadius: '8px',
        },
      ],
      L: [
        sprinkles({ typography: '16/Title/Medium' }),
        {
          padding: '18.5px 40px',
          borderRadius: '8px',
        },
      ],
    },
  },
});
