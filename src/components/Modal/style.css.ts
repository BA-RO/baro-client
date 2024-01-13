import { createVar, style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import { middleLayer, positionCenter, topLayer } from '@styles/utils.css';

export const modalStyle = style([
  positionCenter,
  topLayer,
  {
    padding: '32px',
    width: '400px',
    borderRadius: '16px',
    backgroundColor: COLORS['Grey/White'],
  },
]);

export const dimmed = style([
  middleLayer,
  {
    backgroundColor: COLORS['Dim/50'],
    position: 'fixed',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
  },
]);

export const title = style([
  sprinkles({
    typography: '20/Title/Semibold',
  }),
  {
    display: 'block',
    marginBottom: '18px',
  },
]);

export const body = style([
  sprinkles({
    typography: '15/Body/Regular',
  }),
  {
    display: 'block',
  },
]);

export const buttonColor = createVar();
export const buttonBackgroundColor = createVar();

export const button = style([
  sprinkles({
    typography: '15/Title/Medium',
  }),
  {
    width: '164px',
    color: buttonColor,
    backgroundColor: buttonBackgroundColor,
    padding: '16px 40px',
    borderRadius: '8px',
    marginTop: '24px',
    selectors: {
      '& + &': {
        marginLeft: '8px',
      },
    },
  },
]);
