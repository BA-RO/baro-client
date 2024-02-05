import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const referPageTabWrapper = style([
  sprinkles({ width: { small: 688, middle: 1000, large: 1200 } }),
  {
    minHeight: '100vh',
    padding: '41px 0 64px',
    margin: '0 auto',
  },
]);

export const referCardsWrapper = style([
  {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'space-between',
  },
]);

export const filterButton = style([
  sprinkles({ typography: '15/Title/Medium' }),
  {
    margin: '32px 0 16px',
    padding: '11px 12px 11px 15px',
    backgroundColor: COLORS['Grey/White'],
    borderRadius: '8px',
    color: COLORS['Grey/700'],
    verticalAlign: 'middle',
  },
]);

export const filterButtonIcon = style({
  display: 'inline-block',
  verticalAlign: 'top',
  marginLeft: '4px',
  lineHeight: 0,
});
