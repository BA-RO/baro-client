import { style } from '@vanilla-extract/css';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const container = style({
  width: '592px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
});

export const uploadPostImg = style({
  width: '96px',
  height: '96px',
  borderRadius: '50%',
  objectFit: 'contain',
});

export const profileWrapper = style({
  marginTop: '32px',
  display: 'flex',
  justifyContent: 'center',
});

export const profileDim = style({
  width: '96px',
  height: '96px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const profileImageWrapper = style({
  position: 'relative',
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'center',
});

export const profileImagePostfix = style({
  position: 'absolute',
  bottom: '0',
  right: 'calc(50% - 54px)',
  cursor: 'pointer',
  zIndex: 90,
});

export const textButtonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const textButtonTextWrapper = style({
  padding: '16px 24px',
});

export const textButton = style([
  sprinkles({
    typography: '17/Body/Medium',
  }),
  {
    color: COLORS['Grey/500'],

    ':hover': {
      color: COLORS['Grey/700'],
      borderBottom: `1.5px solid ${COLORS['Grey/700']}`,
    },
  },
]);
