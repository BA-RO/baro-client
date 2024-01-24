import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import { middleLayer, positionCenter, topLayer } from '@styles/utils.css';

export const modalStyle = recipe({
  base: [
    positionCenter,
    topLayer,
    {
      borderRadius: '16px',
      backgroundColor: COLORS['Grey/White'],
    },
  ],
  variants: {
    type: {
      login: {
        width: '480px',
        padding: '48px 40px',
      },
      common: {
        width: '400px',
        padding: '32px',
      },
    },
  },
});

export const dimmed = style([
  middleLayer,
  {
    backgroundColor: COLORS['Dim/50'],
    position: 'fixed',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
  },
]);

export const closeButton = style({
  position: 'absolute',
  padding: '12px',
  top: 0,
  right: 0,
});

export const title = style([
  sprinkles({
    typography: '20/Title/Semibold',
  }),
  {
    display: 'block',
    marginBottom: '18px',
  },
]);

export const body = style([
  sprinkles({
    typography: '15/Body/Regular',
  }),
  {
    display: 'block',
  },
]);

export const buttonColor = createVar();
export const buttonBackgroundColor = createVar();

export const button = style([
  sprinkles({
    typography: '15/Title/Medium',
  }),
  {
    width: '164px',
    color: buttonColor,
    backgroundColor: buttonBackgroundColor,
    padding: '16px 40px',
    borderRadius: '8px',
    marginTop: '24px',
    selectors: {
      '& + &': {
        marginLeft: '8px',
      },
    },
  },
]);

export const helloImage = style({
  textAlign: 'center',
});

export const loginTitleWrapper = style({
  textAlign: 'center',
});

export const loginTitle = style([
  sprinkles({
    typography: '40/Title/Bold',
  }),
  {
    display: 'block',
    margin: '6px 0',
    color: COLORS['Blue/Default'],
  },
]);

export const loginTitleBlack = style([
  sprinkles({
    typography: '40/Title/Bold',
  }),
  {
    color: COLORS['Grey/800'],
  },
]);

export const loginDescription = style([
  sprinkles({
    typography: '18/Body/Regular',
  }),
  {
    color: COLORS['Grey/600'],
  },
]);

export const loginButtonsWrapper = style({
  marginTop: '32px',
});

const loginButton = style([
  sprinkles({
    typography: '16/Body/Medium',
  }),
  {
    width: '100%',
    height: '64px',
    padding: '20px 40px',
    borderRadius: '100px',
    position: 'relative',
    selectors: {
      '& + &': {
        marginTop: '12px',
      },
    },
  },
]);

export const googleLogin = style([
  loginButton,
  {
    color: COLORS['Grey/800'],
    backgroundColor: COLORS['Grey/100'],
  },
]);

export const googleIcon = style({
  display: 'inline-block',
  verticalAlign: '-4px',
  marginRight: '9px',
});

export const naverLogin = style([
  loginButton,
  {
    color: COLORS['Grey/White'],
    backgroundColor: '#03c75a',
  },
]);

export const naverIcon = style({
  display: 'inline-block',
  verticalAlign: '-1px',
  marginRight: '6px',
});

export const kakaoLogin = style([
  loginButton,
  {
    color: COLORS['Grey/800'],
    backgroundColor: '#fee502',
  },
]);

export const kakaoIcon = style({
  display: 'inline-block',
  verticalAlign: '-3px',
  marginRight: '8.5px',
});

export const agreeDescription = style([
  sprinkles({
    typography: '14/Body/Regular',
  }),
  {
    marginTop: '32px',
    textAlign: 'center',
    color: COLORS['Grey/400'],
  },
]);

export const agreeLink = style({
  textDecorationLine: 'underline',
});
