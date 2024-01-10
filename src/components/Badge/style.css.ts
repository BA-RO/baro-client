import { sprinkles } from '@styles/sprinkles.css';
import { COLORS } from '@styles/tokens';
import { recipe } from '@vanilla-extract/recipes';

export const badge = recipe({
  base: [
    sprinkles({ typography: '13/Title/Semibold' }),
    {
      display: 'inline-block',
      width: 'fit-content',
      padding: '6px 8px',
      color: COLORS['Grey/White'],
      borderRadius: '6px',
      whiteSpace: 'nowrap',
    },
  ],
  variants: {
    color: {
      blue: {
        backgroundColor: COLORS['Blue/Default'],
      },
      green: {
        backgroundColor: COLORS['Green'],
      },
      yellow: {
        backgroundColor: COLORS['Yellow'],
      },
      red: {
        backgroundColor: COLORS['LightRed'],
      },
      orange: {
        backgroundColor: COLORS['Orange'],
      },
      purple: {
        backgroundColor: COLORS['Purple'],
      },
      grey: {
        color: COLORS['Grey/250'],
        backgroundColor: COLORS['Grey/600'],
      },
      black: {
        backgroundColor: COLORS['Grey/800'],
      },
    },
  },
});
