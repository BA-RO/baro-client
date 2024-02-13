import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@styles/tokens';

export const wrapper = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const container = style({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '32px',
  width: '400px',
  borderRadius: '16px',
  position: 'relative',
});

export const closeBtn = style({
  cursor: 'pointer',
  position: 'absolute',
  top: '12px',
  right: '12px',
});

export const modalTitle = style({
  fontSize: '20px',
  fontWeight: '600',
  letterSpacing: '-0.5px',
});

export const modalSubTitle = style({
  margin: '18px 0 20px 0',
  color: COLORS['Grey/700'],
  fontSize: '15px',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '-0.2px',
});

export const modalSubTitle2 = style({
  marginTop: '18px',
  color: COLORS['Grey/700'],
  fontSize: '15px',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '-0.2px',
});

export const lists = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const ctaWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const ctaBtn = recipe({
  base: {
    flex: 1,
    height: '48px',
    padding: '0px 24px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '500',
  },
  variants: {
    type: {
      cancel: {
        backgroundColor: COLORS['Grey/150'],
        color: COLORS['Grey/600'],
      },
      next: {
        backgroundColor: COLORS['Blue/Default'],
        color: 'white',
      },
      disable: {
        backgroundColor: COLORS['Blue/Default'],
        color: 'white',
        opacity: 0.5,
      },
    },
  },
});
