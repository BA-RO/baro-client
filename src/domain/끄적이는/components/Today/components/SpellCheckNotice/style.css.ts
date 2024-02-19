import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const notice = style([
  utils.flexAlignCenter,
  sprinkles({ typography: '13/Title/Semibold' }),
  {
    marginTop: '16px',
    color: COLORS['Blue/Dark'],
    gap: '4px',
  },
]);
