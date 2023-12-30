import { recipe } from '@vanilla-extract/recipes';

export const input = recipe({
  base: [
    {
      borderRadius: '16px',
      width: '100%',
      resize: 'none',
      padding: '22px 12px 22px 24px',
      color: '#121212',
      fontSize: '17px',
      fontWeight: '400',
      lineHeight: '27px',
    },
  ],
  variants: {
    type: {
      '1': {
        backgroundColor: '#EFF5FF',
        caretColor: 'transparent',
        height: '72px',
      },
      '2': {
        backgroundColor: 'white',
        border: '1px solid #4C94FF',
        height: 'auto',
      },
    },
    focus: {
      true: {
        border: '1px solid purple',
      },
    },
  },
});
