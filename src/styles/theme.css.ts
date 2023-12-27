import { createGlobalTheme } from '@vanilla-extract/css';

import { COLORS, FONT } from './tokens';

export const theme = createGlobalTheme(':root', {
  font: FONT,
  colors: COLORS,
});
