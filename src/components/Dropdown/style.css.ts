import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const wrapper = style({
  position: 'relative',
  width: 'fit-content',
});

export const trigger = style({
  width: 'fit-content',
});

export const position = createVar();
export const top = createVar();
export const left = createVar();

export const menuList = recipe({
  base: {
    position,
    top,
    left,
    marginTop: '4px',
    borderRadius: '12px',
    boxShadow: '0px 8px 15px 0px rgba(28, 28, 28, 0.08)',
    backgroundColor: COLORS['Grey/White'],
    zIndex: 100,
  },
  variants: {
    size: {
      small: {
        width: '100px',
        padding: '8px',
      },
      medium: {
        width: '228px',
        padding: '8px 12px',
      },
    },
  },
});

export const dropdownTitle = style([
  utils.flexCenter,
  {
    padding: '10px 12px',
  },
]);

export const line = style({
  height: '1px',
  width: '196px',
  backgroundColor: COLORS['Grey/150'],
  margin: '4px 0',
});

export const menuItem = recipe({
  base: [
    sprinkles({
      typography: '15/Body/Regular',
    }),
    utils.flexAlignCenter,
    {
      color: COLORS['Grey/900'],
      borderRadius: '4px',
      ':hover': {
        backgroundColor: COLORS['Grey/100'],
      },
    },
  ],
  variants: {
    size: {
      small: {
        justifyContent: 'center',
        padding: '8px',
        width: '84px',
        selectors: {
          '& + &': {
            marginTop: '8px',
          },
        },
      },
      medium: {
        padding: '8px 12px',
        width: '204px',
        textAlign: 'left',
        selectors: {
          '& + &': {
            marginTop: '8px',
          },
        },
      },
    },
  },
});

/** storybook */
export const badge = style([
  sprinkles({
    typography: '11/Caption/Medium',
  }),
  {
    marginLeft: '4px',
    backgroundColor: COLORS['Blue/Light'],
    color: COLORS['Blue/Default'],
    width: '32px',
    height: '20px',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: '-2px',
    padding: '3px 6px',
    borderRadius: '100px',
  },
]);

export const newFolder = style([utils.flexAlignCenter]);

export const newFolderText = style([
  sprinkles({
    typography: '15/Body/Medium',
  }),
  {
    color: COLORS['Grey/400'],
    marginLeft: '4px',
  },
]);

export const dialogWrapper = style({
  padding: '10px',
});

export const profile = style({
  padding: '10px',
});

export const profileName = style([
  sprinkles({
    typography: '16/Title/Medium',
  }),
  {
    color: COLORS['Grey/900'],
    verticalAlign: 'middle',
    display: 'inline-block',
    marginLeft: '8px',
  },
]);

export const buttonText = style([
  sprinkles({
    typography: '15/Body/Regular',
  }),
  {
    marginLeft: '6px',
    color: COLORS['Grey/800'],
  },
]);
