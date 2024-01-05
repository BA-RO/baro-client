import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@/src/styles/tokens';

export const inputHeight = createVar();

export const conatiner = recipe({
  base: [
    {
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '16px',
      width: '100%',
      padding: '22px 12px 22px 24px',
    },
  ],
  variants: {
    type: {
      primary: { border: `2px solid ${COLORS['Blue/Gradient']}` },
      secondary: {
        backgroundColor: COLORS['Grey/100'],
      },
    },
    error: {
      true: {
        border: `1.5px solid ${COLORS['Red']}`,
      },
    },
  },
});

export const contentWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: inputHeight,
});

export const label = style({
  width: '100%',
});

export const input = recipe({
  base: [
    {
      width: '100%',
      height: inputHeight,
      resize: 'none',
      color: COLORS['Grey/900'],
      fontSize: '17px',
      lineHeight: '27px',
      '::placeholder': {
        color: COLORS['Grey/250'],
      },
    },
  ],
});

export const alert = recipe({
  base: [
    {
      display: 'flex',
      alignItems: 'center',
      marginTop: '12px',
    },
  ],
});

export const alertMsg = recipe({
  base: [
    {
      marginLeft: '6px',
      color: COLORS['Grey/600'],
      fontSize: '13px',
      fontWeight: '600',
      lineHeight: '17px',
    },
  ],
});

export const submitWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
  paddingLeft: '20px',
  height: '100%',
});

export const submit = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  height: '48px',
});

export const textCount = style({
  color: COLORS['Grey/400'],
  fontSize: '14px',
  fontWeight: '400',
  whiteSpace: 'nowrap',
});

export const currentTextCount = style({
  color: COLORS['Blue/Default'],
  fontSize: '14px',
  fontWeight: '700',
});
