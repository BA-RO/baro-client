import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { TOAST_TRANSITION_DURATION } from '@constants/toast';
import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import { modalLayer } from '@styles/utils.css';

const fadeIn = keyframes({
  from: { bottom: '0', opacity: '0' },
  to: { bottom: '40px', opacity: '1px' },
});

const fadeOut = keyframes({
  from: { bottom: '40px', opacity: '1px' },
  to: { bottom: '0', opacity: '0' },
});

export const toast = recipe({
  base: [
    modalLayer,
    {
      backgroundColor: COLORS['Dim/85'],
      position: 'fixed',
      color: COLORS['Grey/White'],
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      minWidth: '100px',
      borderRadius: '12px',
      textAlign: 'center',
      padding: '23px 32px',
      pointerEvents: 'none',
    },
  ],
  variants: {
    isVisible: {
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
