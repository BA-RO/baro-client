import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { COLORS, TYPOGRAPHY } from './tokens';

const fontProperties = defineProperties({
  properties: {
    fontSize: TYPOGRAPHY,
  },
});

const colorProperties = defineProperties({
  properties: {
    color: COLORS,
    backgroundColor: COLORS,
  },
});

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const sprinkles = createSprinkles(fontProperties, colorProperties);
