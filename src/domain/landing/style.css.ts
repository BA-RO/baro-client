import { keyframes, style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const firstRowWrapper = style({
  overflowX: 'hidden',
  position: 'relative',
  height: '270px',
  width: '100%',
  marginTop: '72px',
});

const firstRowSlide = keyframes({
  '0%': { left: 0 },
  '100%': { left: '-2527px' },
});

export const firstRowTrack = style({
  position: 'absolute',
  left: 0,
  display: 'flex',
  gap: '16px',
  width: '5038px',
  animation: `${firstRowSlide} 20s linear infinite`,
});

export const secondRowWrapper = style({
  overflowX: 'hidden',
  position: 'relative',
  height: '270px',
  width: '100%',
  marginTop: '16px',
});

const secondRowSlide = keyframes({
  '0%': { right: 0 },
  '100%': { right: '-2527px' },
});

export const seconRowTrack = style({
  position: 'absolute',
  right: 0,
  display: 'flex',
  gap: '16px',
  width: '5038px',
  animation: `${secondRowSlide} 20s linear infinite`,
});

export const ladingImage = style({
  width: '100%',
  height: '100%',
  display: 'block',
});

export const firstImageWrapper = style({
  position: 'relative',
  height: '880px',
  backgroundColor: COLORS['Blue/Light'],
});

export const titleWrapper = style({
  padding: '72px 152px 0',
  display: 'flex',
  justifyContent: 'space-between',
});

export const leftTitle = style({
  color: COLORS['Grey/700'],
  fontSize: '36px',
  textAlign: 'center',
  fontWeight: 400,
  fontStyle: 'normal',
  letterSpacing: '-1px',
});

export const logoWrapper = style({
  marginTop: '16px',
});

export const rightText = style([
  sprinkles({
    typography: '17/Body/Medium',
  }),
  {
    display: 'inline-block',
    width: '270px',
    color: COLORS['Grey/800'],
    wordBreak: 'keep-all',
  },
]);

export const iconWrapper = style({
  marginRight: '8px',
  display: 'inline-block',
  verticalAlign: 'top',
});

export const rightTextWrapper = style({
  selectors: {
    '& + &': {
      marginTop: '24px',
    },
  },
});

export const landingCardwrapper = style([
  {
    position: 'relative',
    padding: '24.2px 27.6px 17.3px',
    gap: '13.8px',
    width: '345px',
    height: '270px',
    flexShrink: 0,
    fontSize: '14px',
  },
]);

export const cardBody = style({
  color: COLORS['Grey/900'],
  fontSize: '12.96px',
  fontWeight: 400,
  lineHeight: '20.736px',
  letterSpacing: '-0.173px',
});
