import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@styles/tokens';
import * as utils from '@styles/utils.css';

export const tab = style({
  width: '100%',
});

export const tabsList = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    type: {
      switcher: {
        justifyContent: 'center',
        borderRadius: '100px',
        backgroundColor: COLORS['Grey/200'],
      },
      filter: {
        gap: '20px',
        backgroundColor: COLORS['Grey/White'],
      },
    },
  },
});

export const tabItem = style({
  position: 'relative',
});

export const tabsTrigger = recipe({
  base: [
    utils.flexCenter,
    {
      gap: '5px',
      whiteSpace: 'nowrap',
      transition: 'all 150ms ease-in-out',

      ':hover': {
        fontWeight: 700,
      },
    },
  ],
  variants: {
    type: {
      switcher: {
        position: 'relative',
        width: '183px',
        height: '42px',
        padding: '8px 0',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '19px',
        letterSpacing: '-0.5px',
        color: COLORS['Grey/500'],
        zIndex: 20,
      },
      filter: [
        {
          fontSize: '15px',
          fontWeight: 500,
          lineHeight: '18px',
          letterSpacing: '0px',
          position: 'relative',
          paddingBottom: '4px',
          borderBottom: '2px solid transparent',
        },
      ],
    },
  },
});

export const tabContent = recipe({
  variants: {
    type: {
      switcher: {},
      filter: {
        marginTop: '24px',
      },
    },
  },
});

export const isActiveSwitcher = style({
  fontWeight: 700,
  color: COLORS['Blue/Dark'],
});

export const isActiveFilter = style({
  fontWeight: 700,
});

export const underline = style({
  position: 'absolute',
  bottom: '-2px',
  left: 0,
  right: 0,
  height: '2px',
  background: COLORS['Grey/900'],
});

export const handle = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '42px',
  borderRadius: '100px',
  backgroundColor: COLORS['Grey/White'],
  border: `1.5px solid ${COLORS['Blue/Default']}`,
});
