import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const notFound = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const message = style({
  marginTop: '16px',
  marginBottom: '32px',
  textAlign: 'center',
});

export const title = style([
  sprinkles({ typography: '20/Title/Semibold' }),
  {
    marginBottom: '8px',
    color: COLORS['Grey/900'],
  },
]);

export const description = style([
  sprinkles({ typography: '17/Body/Regular' }),
  {
    color: COLORS['Grey/700'],
  },
]);
