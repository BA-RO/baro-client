import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const guide = style([
  utils.flexCenter,
  {
    marginTop: '220px',
    marginBottom: '12px',
    gap: '2px',
  },
]);

export const guideText = style([
  sprinkles({ typography: '15/Title/Medium' }),
  {
    color: COLORS['Grey/500'],
  },
]);

export const newMemberGuide = style({
  marginBottom: '48px',
});

export const guideImage = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '240px',
  marginBottom: '64px',
});
