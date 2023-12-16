import { style } from '@vanilla-extract/css';

const placeholder = {
  textAlign: 'center',
  verticalAlign: 'center',
} as const;

export const defaultLabelStyle = style({
  position: 'relative',
});

export const defaultInputStyle = style({
  height: '72px',
  padding: '0 24px 0 12px',
  borderRadius: '16px',
  backgroundColor: '#EFF5FF',
  width: '100%',
  color: '#121212',
  fontSize: '17px',
  fontWeight: '400',
  lineHeight: '27px',
  resize: 'none',
  selectors: {
    '&::placeholder': placeholder,
  },
});

export const postfixWrapper = style({
  position: 'absolute',
  top: '50%',
  right: '12px',
  transform: 'translateY(-50%)',
});

export const postfixTextStyle = style({
  height: '17px',
});
