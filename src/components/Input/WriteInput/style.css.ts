import { COLORS } from '@styles/tokens';
import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const conatiner = style({
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '16px',
  width: '100%',
  padding: '22px 12px 22px 24px',
  border: `2px solid ${COLORS['Blue/Gradient']}`,
});

export const inputHeight = createVar();
export const contentWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: inputHeight,
  minHeight: '27px',
  maxHeight: '260px',
});

export const label = style({
  width: '100%',
});

export const input = style({
  padding: '0',
  width: '100%',
  maxHeight: '216px',
  resize: 'none',
  color: COLORS['Grey/900'],
  fontSize: '17px',
  lineHeight: '27px',
  overflowWrap: 'break-word',
  '::placeholder': {
    color: COLORS['Grey/250'],
  },
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

export const alert = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '12px',
});

export const alertMsg = style({
  marginLeft: '6px',
  color: COLORS['Grey/600'],
  fontSize: '13px',
  fontWeight: '600',
  lineHeight: '17px',
});
