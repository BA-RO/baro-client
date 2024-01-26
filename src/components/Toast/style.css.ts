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
      minWidth: '100px',
      position: 'fixed',
      left: '50%',
      bottom: '0',
      padding: '23px 32px',
      color: COLORS['Grey/White'],
      backgroundColor: COLORS['Dim/85'],
      borderRadius: '12px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      transform: 'translateX(-50%)',
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
