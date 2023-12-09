import { style } from '@vanilla-extract/css';

export const cursorPointer = style({
  cursor: 'pointer',
});

export const fullScreen = style({
  width: '100vw',
  height: '100vh',
});

export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});

export const backLayer = style({ zIndex: -1 });
export const baseLayer = style({ zIndex: 0 });
export const middleLayer = style({ zIndex: 50 });
export const topLayer = style({ zIndex: 100 });
export const modalLayer = style({ zIndex: 1000 });

export const flex = style({
  display: 'flex',
});

export const flexColumn = style([
  flex,
  {
    flexDirection: 'column',
  },
]);

export const flexAlignCenter = style([
  flex,
  {
    alignItems: 'center',
  },
]);

export const flexJustifyCenter = style([
  flex,
  {
    justifyContent: 'center',
  },
]);

export const flexCenter = style([flex, flexAlignCenter, flexJustifyCenter]);

export const flexColumnCenter = style([
  flexCenter,
  {
    flexDirection: 'column',
  },
]);

export const positionAbsolute = style({
  position: 'absolute',
});

export const positionRelative = style({
  position: 'relative',
});

export const positionFixed = style({
  position: 'fixed',
});

export const positionCenter = style([
  positionAbsolute,
  {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
]);

export const lineClamp = (line: number) => {
  return style({
    display: '-webkit-box',
    WebkitLineClamp: `${line}`,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  });
};
