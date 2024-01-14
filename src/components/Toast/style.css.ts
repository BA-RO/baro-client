import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { TOAST_TRANSITION_DURATION } from '@constants/toast';
import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import { modalLayer } from '@styles/utils.css';

const fadeIn = keyframes({
  from: { bottom: 0, opacity: 0 },
  to: { bottom: 40, opacity: 1 },
});

const fadeOut = keyframes({
  from: { bottom: 40, opacity: 1 },
  to: { bottom: 0, opacity: 0 },
});

export const toast = recipe({
  base: [
    modalLayer,
    {
      backgroundColor: COLORS['Dim/85'],
      position: 'fixed',
      color: COLORS['Grey/White'],
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      minWidth: 100,
      borderRadius: 12,
      textAlign: 'center',
      padding: '23px 32px',
      pointerEvents: 'none',
    },
  ],
  variants: {
    isActive: {
      true: {
        animation: `${fadeIn} ${TOAST_TRANSITION_DURATION}ms forwards`,
      },
      false: {
        animation: `${fadeOut} ${TOAST_TRANSITION_DURATION}ms forwards`,
      },
    },
  },
});

export const toastText = style([
  sprinkles({
    typography: '14/Body/Regular',
  }),
]);
