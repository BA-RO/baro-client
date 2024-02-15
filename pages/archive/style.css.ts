import { style } from '@vanilla-extract/css';

import * as medias from '@styles/medias.css';

export const archive = style([
  medias.large({ padding: '48px 40px' }),
  medias.extraLarge({ padding: '48px 120px' }),
  {
    display: 'flex',
    gap: '40px',
    padding: '48px 40px',
  },
]);
