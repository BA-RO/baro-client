import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';

export const referPageTabWrapper = style([
  sprinkles({ width: { small: 688, middle: 1000, large: 1200 } }),
  {
    minHeight: '100vh',
    padding: '128px 0 64px',
    margin: '0 auto',
    position: 'relative',
  },
]);

export const referCardsWrapper = style({ marginTop: '100px' });
