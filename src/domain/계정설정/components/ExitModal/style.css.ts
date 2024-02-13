import { style } from '@vanilla-extract/css';

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

export const lists = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
