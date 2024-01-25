import { createVar, keyframes, style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

export const width = createVar();
export const height = createVar();
export const radius = createVar();

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.5 },
});

export const skeleton = style({
  width,
  height,
  borderRadius: radius,
  backgroundColor: COLORS['Grey/200'],
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});
