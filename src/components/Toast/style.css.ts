import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/src/styles/sprinkles.css';
import { theme } from '@/src/styles/theme.css';
import { modalLayer } from '@/src/styles/utils.css';

export const toast = style([
  modalLayer,
  sprinkles({
    fontSize: '14/Body/Regular',
  }),
  {
    backgroundColor: theme.colors['Dim/70'],
    position: 'fixed',
    color: theme.colors['Grey/White'],
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
]);

export const open = style({
  opacity: 1,
  transform: 'translateX(-50%) translateY(-30px)',
});
