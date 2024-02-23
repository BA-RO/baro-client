import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import { fullScreen, middleLayer, topLayer } from '@styles/utils.css';

export const modalStyle = recipe({
  base: [
    topLayer,
    {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
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
  fullScreen,
  middleLayer,
  {
    backgroundColor: COLORS['Dim/50'],
    position: 'fixed',
    left: 0,
    top: 0,
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
    selectors: {
      '& + &': {
        marginLeft: '8px',
      },
    },
  },
]);

export const buttonWrapper = style({
  marginTop: '24px',
});

export const buttonDisabled = style({
  opacity: '0.5',
});

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

export const recentLoginMessage = style([
  sprinkles({
    typography: '11/Caption/Regular',
  }),
  {
    marginTop: '-3px',
    display: 'block',
  },
]);

export const googleLogin = recipe({
  base: [
    loginButton,
    {
      color: COLORS['Grey/800'],
      backgroundColor: COLORS['Grey/100'],
    },
  ],
  variants: {
    recent: {
      true: { padding: '12.5px 40px' },
      false: { padding: '20px 40px' },
    },
  },
});

export const googleIcon = style({
  display: 'inline-block',
  verticalAlign: '-4px',
  marginRight: '9px',
});

export const naverLogin = recipe({
  base: [
    loginButton,
    {
      color: COLORS['Grey/White'],
      backgroundColor: '#03c75a',
    },
  ],
  variants: {
    recent: {
      true: { padding: '12.5px 40px' },
      false: { padding: '20px 40px' },
    },
  },
});

export const naverIcon = style({
  display: 'inline-block',
  verticalAlign: '-1px',
  marginRight: '6px',
});

export const kakaoLogin = recipe({
  base: [
    loginButton,
    {
      color: COLORS['Grey/800'],
      backgroundColor: '#fee502',
    },
  ],
  variants: {
    recent: {
      true: { padding: '12.5px 40px' },
      false: { padding: '20px 40px' },
    },
  },
});

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

export const makeFolderTitle = style([
  title,
  {
    marginBottom: '28px',
  },
]);

export const makeFolderDescription = style([
  sprinkles({
    typography: '15/Body/Regular',
  }),
  {
    color: COLORS['Grey/700'],
  },
]);

export const makeFolderInputWrapper = style({
  margin: '12px 0',
});

export const makeFolderInput = style({
  width: '100%',
  height: '48px',
  padding: '12px 16px',
  color: COLORS['Grey/600'],
  backgroundColor: COLORS['Grey/100'],
  borderRadius: '8px',
});

export const errorInput = style({
  border: `1.5px solid ${COLORS['Red']}`,
});

export const makeFolderButtonWrapper = style({
  paddingTop: '16px',
});

export const errorMessage = style([
  sprinkles({
    typography: '13/Title/Semibold',
  }),
  {
    display: 'block',
    marginBottom: '8px',
    color: COLORS['Red'],
  },
]);

export const errorIcon = style({
  display: 'inline-block',
  verticalAlign: '-5px',
  marginRight: '6px',
});

export const modalHeader = style([
  sprinkles({ typography: '20/Title/Semibold' }),
  {
    marginBottom: '18px',
    color: COLORS['Grey/900'],
  },
]);

export const modalBody = style([
  sprinkles({ typography: '15/Body/Regular' }),
  {
    marginBottom: '24px',
    color: COLORS['Grey/700'],
  },
]);
