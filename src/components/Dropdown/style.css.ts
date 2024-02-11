import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const dropdownRoot = recipe({
  base: {
    borderRadius: '12px',
    boxShadow: '0px 8px 15px 0px rgba(28, 28, 28, 0.08)',
    backgroundColor: COLORS['Grey/White'],
  },
  variants: {
    type: {
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

export const dropdownTitle = style({
  padding: '10px 12px',
  textAlign: 'center',
});

export const line = style({
  height: '1px',
  width: '196px',
  backgroundColor: COLORS['Grey/150'],
  margin: '4px 0',
});

export const dropdownButton = recipe({
  base: [
    sprinkles({
      typography: '15/Body/Regular',
    }),
    {
      color: COLORS['Grey/900'],
      borderRadius: '4px',
      display: 'block',
      ':hover': {
        backgroundColor: COLORS['Grey/100'],
      },
    },
  ],
  variants: {
    type: {
      small: {
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

export const iconMediumText = style([
  sprinkles({
    typography: '15/Body/Medium',
  }),
  {
    color: COLORS['Grey/400'],
    marginLeft: '28px',
  },
]);

export const icon = style({
  position: 'absolute',
  marginTop: '2px',
});
