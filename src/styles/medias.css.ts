import { type StyleRule } from '@vanilla-extract/css';

const BREAKPOINTS = {
  MEDIUM: 768,
  LARGE: 1080,
  EXTRALARGE: 1440,
};

export const medium = (token: StyleRule) => {
  return {
    '@media': {
      [`screen and (min-width: ${BREAKPOINTS.MEDIUM}px)`]: token,
    },
  };
};

export const large = (token: StyleRule) => {
  return {
    '@media': {
      [`screen and (min-width: ${BREAKPOINTS.LARGE}px)`]: token,
    },
  };
};

export const extraLarge = (token: StyleRule) => {
  return {
    '@media': {
      [`screen and (min-width: ${BREAKPOINTS.EXTRALARGE}px)`]: token,
    },
  };
};
