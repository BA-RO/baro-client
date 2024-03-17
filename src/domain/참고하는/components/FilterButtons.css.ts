import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const filterButtonWrapper = style([
  sprinkles({ typography: '15/Title/Medium' }),
  {
    width: '88px',
    position: 'absolute',
    top: '268px',
    backgroundColor: COLORS['Grey/White'],
    borderRadius: '8px',
    color: COLORS['Grey/700'],
    verticalAlign: 'middle',

    ':hover': {
      boxShadow: '0px 8px 15px 0px rgba(28, 28, 28, 0.08)',
    },
  },
]);

export const activeFilterButtonsWrapper = style([
  filterButtonWrapper,
  {
    zIndex: 10,
    boxShadow: '0px 8px 15px 0px rgba(28, 28, 28, 0.08)',
  },
]);

export const activeFilterButton = style([
  sprinkles({ typography: '15/Title/Medium' }),
  {
    padding: '11px 12px 11px 15px',
    ':hover': {
      fontWeight: 700,
    },
  },
]);

export const filterButtonIcon = style({
  pointerEvents: 'none',
  display: 'inline-block',
  verticalAlign: 'top',
  marginLeft: '4px',
  lineHeight: 0,
});

export const remainFilterButton = style([
  sprinkles({ typography: '15/Body/Regular' }),
  {
    width: '74px',
    textAlign: 'left',
    margin: '3px 7px',
    lineHeight: '18px',
    padding: '8px',
    color: COLORS['Grey/500'],

    ':hover': {
      borderRadius: '4px',
      backgroundColor: COLORS['Grey/100'],
    },
  },
]);
