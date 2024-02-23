import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const wrapper = style([
  utils.flexCenter,
  {
    marginTop: '12px',
    marginBottom: '24px',
  },
]);

export const message = style([
  utils.flexCenter,
  {
    padding: '6px 28px',
    border: `1px solid ${COLORS['Grey/200']}`,
    borderRadius: '100px',
  },
]);

export const text = style([
  sprinkles({ typography: '15/Body/Medium' }),
  {
    marginLeft: '6px',
  },
]);
