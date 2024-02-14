import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '0 24px',
  backgroundColor: COLORS['Grey/900'],
  zIndex: 100,
});

export const logo = style({
  display: 'inline-block',
  padding: '18px 0',
});

export const userButton = style({
  display: 'flex',
  alignItems: 'center',
});

export const submitWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingLeft: '20px',
  },
  variants: {
    multirow: {
      true: {
        height: '100%',
      },
    },
  },
});

export const buttonsWrapper = recipe({
  variants: {
    type: {
      normal: {
        margin: '8px 0',
      },
      intro: {
        margin: '12px 0',
      },
    },
  },
});

export const bookmark = style({
  display: 'inline-block',
  padding: '12px',
});

export const profile = style({
  padding: '10px',
});

export const dialogWrapper = style({
  padding: '10px',
});

export const profileName = style([
  sprinkles({
    typography: '16/Title/Medium',
  }),
  {
    color: COLORS['Grey/900'],
    verticalAlign: 'middle',
    display: 'inline-block',
    marginLeft: '8px',
  },
]);

export const buttonText = style([
  sprinkles({
    typography: '15/Body/Regular',
  }),
  {
    marginLeft: '6px',
    color: COLORS['Grey/800'],
  },
]);

export const footerWrapper = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '40px 200px',
  backgroundColor: COLORS['Grey/700'],
  display: 'flex',
  justifyContent: 'space-between',
});

const dot = style({
  selectors: {
    '&:not(:last-child)::after': {
      content: '',
      display: 'inline-block',
      verticalAlign: 'top',
      margin: '7.5px 8px 0',
      borderRadius: '50%',
      width: '3px',
      height: '3px',
      backgroundColor: COLORS['Grey/500'],
    },
  },
});

const footerText = style([
  sprinkles({
    typography: '14/Body/Regular',
  }),
  {
    color: COLORS['Grey/400'],
  },
]);

export const footerButton = style([footerText, dot]);

export const footerLink = style([footerText, dot]);

export const instagramLink = style([
  sprinkles({
    typography: '14/Body/Regular',
  }),
  {
    color: COLORS['Grey/400'],
    marginTop: '8px',
  },
]);

export const instagramIcon = style({
  lineHeight: 0,
  display: 'inline-block',
  verticalAlign: 'top',
});

export const instagramText = style({
  display: 'inline-block',
  margin: '2.5px 0 0 4px',
});

export const baroIcon = style({
  marginLeft: '167px',
  marginBottom: '8px',
});

export const copyright = style([
  sprinkles({
    typography: '14/Body/Regular',
  }),
  {
    color: COLORS['Grey/400'],
  },
]);

export const loginButton = style([
  sprinkles({
    typography: '15/Title/Medium',
  }),
  {
    margin: '12px 0',
    borderRadius: '100px',
    backgroundColor: COLORS['Blue/Dark'],
    padding: '0 18px',
    textAlign: 'center',
    color: COLORS['Grey/White'],
  },
]);
export const backgroundColorMain = createVar();

export const mainWrapper = style({
  backgroundColor: backgroundColorMain,
  paddingTop: '64px',
});

export const tab = style({
  position: 'fixed',
  top: '84px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  zIndex: 50,
});

export const profileButton = style({
  selectors: {
    '& + &': {
      marginTop: '8px',
    },
  },
});

export const tabWrapper = style({
  maxWidth: '1200px',
  margin: '0 auto',
});
