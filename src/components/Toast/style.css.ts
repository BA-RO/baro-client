import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import { modalLayer } from '@styles/utils.css';
import { recipe } from '@vanilla-extract/recipes';

export const toast = recipe({
  base: [
    modalLayer,
    sprinkles({
      typography: '14/Body/Regular',
    }),
    {
      backgroundColor: COLORS['Dim/70'],
      position: 'fixed',
      color: COLORS['Grey/White'],
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%) translateY(30px)',
      borderRadius: '6px',
      textAlign: 'center',
      padding: '23px 32px',
      transition: 'transform 400ms ease, opacity 400ms',
      opacity: 0,
      pointerEvents: 'none',
    },
  ],
  variants: {
    isActive: {
      true: {
        opacity: 1,
        transform: 'translateX(-50%) translateY(-30px)',
      },
    },
  },
});
