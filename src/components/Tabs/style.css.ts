import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@/src/styles/tokens';
import * as utils from '@/src/styles/utils.css';

export const tabsList = style([
  utils.flexCenter,
  {
    padding: '16px 0 12px',
    gap: '40px',
    backgroundColor: COLORS['Grey/White'],
  },
]);

export const tabsTrigger = recipe({
  base: {
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '18px',
    letterSpacing: '0px',
    paddingBottom: '4px',
    borderBottom: '2px solid transparent',
    transition: 'all 150ms ease-in-out',

    ':hover': {
      fontWeight: 700,
    },
  },
  variants: {
    isActive: {
      true: {
        fontWeight: 700,
        borderBottomColor: '#121212',
      },
    },
  },
});
