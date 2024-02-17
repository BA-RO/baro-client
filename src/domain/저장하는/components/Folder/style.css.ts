import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import * as utils from '@styles/utils.css';

export const folderButton = style([
  sprinkles({ typography: '16/Title/Medium' }),
  utils.flexAlignCenter,
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 12px 8px 20px',
  },
]);

export const folderName = style({
  display: 'inline-block',
  width: '100%',
});
