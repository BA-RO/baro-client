import { keyframes, style } from '@vanilla-extract/css';

import { COLORS } from '@styles/tokens';

const spin = keyframes({
  to: { transform: 'rotate(360deg)' },
});

export const wrapper = style({
  width: 'fit-content',
  margin: '0 auto',
});

export const spinner = style({
  display: 'inline-block',
  width: '38px',
  height: '38px',
  border: `5px solid ${COLORS['Grey/100']}`,
  borderRadius: '50%',
  borderTopColor: COLORS['Blue/Default'],
  animation: `${spin} 1s ease-in-out infinite`,
});
