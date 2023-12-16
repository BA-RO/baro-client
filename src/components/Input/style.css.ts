import { style } from '@vanilla-extract/css';

const placeholder = {
  lineHeight: '27px',
  transform: 'translateY(10px)',
} as const;

const defaultInputStyle = {
  borderRadius: '16px',
  width: '100%',
  resize: 'none',
  color: '#121212',
  fontSize: '17px',
  fontWeight: '400',
  lineHeight: '27px',
  selectors: {
    '&::placeholder': placeholder,
  },
} as const;

export const noneValue = style({
  ...defaultInputStyle,
  backgroundColor: '#EFF5FF',
  height: 'auto',
});
