import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const inputHeight = createVar();

export const input = recipe({
  base: [
    {
      borderRadius: '16px',
      caretColor: 'transparent',
      border: '2px solid #4C94FF',
      resize: 'none',
      width: '100%',
      padding: '12px 16px',
      height: inputHeight,
    },
  ],
  variants: {
    type: {
      primary: {},
      create: {},
    },
  },
});
