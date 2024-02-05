import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { COLORS, TYPOGRAPHY } from './tokens';

const fontProperties = defineProperties({
  properties: {
    typography: TYPOGRAPHY,
  },
});

const colorProperties = defineProperties({
  properties: {
    color: COLORS,
    backgroundColor: COLORS,
  },
});

const width = {
  322: '322px',
  336: '336px',
  389: '389px',
  688: '688px',
  1000: '1000px',
  1200: '1200px',
};

const responsiveProperties = defineProperties({
  conditions: {
    small: { '@media': 'screen and (min-width: 768px)' },
    middle: { '@media': 'screen and (min-width: 1024px)' },
    large: { '@media': 'screen and (min-width: 1440px)' },
  },
  defaultCondition: 'large',
  properties: {
    width,
  },
});

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const sprinkles = createSprinkles(
  fontProperties,
  colorProperties,
  responsiveProperties,
);
