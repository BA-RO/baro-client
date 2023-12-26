import * as utils from '@/src/styles/utils.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const tab = style([
  utils.flexCenter,
  {
    padding: '16px 0 12px',
    gap: '40px',
    backgroundColor: '#ffffff',
  },
]);

export const tabItem = recipe({
  base: {
    fontSize: '16px',
    letterSpacing: '-0.5px',
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
