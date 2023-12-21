import { style } from '@vanilla-extract/css';

export const inputContainerStyle = style({
  width: '100%',
  padding: '22px 12px 22px 24px',
});

const defaultInputStyle = {
  borderRadius: '16px',
  width: '100%',
  resize: 'none',
  color: '#121212',
  fontSize: '17px',
  fontWeight: '400',
  lineHeight: '27px',
} as const;

export const noneValueInputStyle = style({
  ...defaultInputStyle,
  backgroundColor: '#EFF5FF',
  caretColor: 'transparent',
  height: '72px',
});

export const activeInputStyle = style({
  ...defaultInputStyle,
  backgroundColor: 'white',
  border: '1px solid #4C94FF',
  height: 'auto',
});
