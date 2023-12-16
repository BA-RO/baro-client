import {
  FLEX_CONTENT_ALIGNMENT,
  FLEX_ITEMS_ALIGNMENT,
  FONT_WEIGHT,
  GRID_CELL,
  GRID_CONTENT_ALIGNMENT,
  GRID_ITEMS_ALIGNMENT,
  HEIGHT_SIZE,
  MARGIN_SPACE,
  RADII,
  SPACE,
  WIDTH_SIZE,
} from './tokens';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const textProperties = defineProperties({
  properties: {
    fontWeight: FONT_WEIGHT,
    textAlign: ['left', 'center', 'right'],
    textDecoration: ['underline', 'line-through', 'dashed'],
    whiteSpace: ['nowrap', 'pre-wrap'],
  },
});

const layoutProperties = defineProperties({
  properties: {
    width: WIDTH_SIZE,
    height: HEIGHT_SIZE,
    minWidth: WIDTH_SIZE,
    minHeight: HEIGHT_SIZE,
    maxWidth: WIDTH_SIZE,
    maxHeight: HEIGHT_SIZE,
    marginTop: MARGIN_SPACE,
    marginBottom: MARGIN_SPACE,
    marginLeft: MARGIN_SPACE,
    marginRight: MARGIN_SPACE,
    paddingTop: SPACE,
    paddingBottom: SPACE,
    paddingLeft: SPACE,
    paddingRight: SPACE,
    borderRadius: RADII,
    opacity: ['0', '0.05', '0.1', '0.2', '0.5', '0.6', '0.8', '1'],
    overflowX: ['auto', 'hidden', 'scroll'],
    overflowY: ['auto', 'hidden', 'scroll'],
    rowGap: SPACE,
    columnGap: SPACE,
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    overflow: ['overflowX', 'overflowY'],
    gap: ['rowGap', 'columnGap'],
  },
});

const flexProperties = defineProperties({
  properties: {
    display: ['flex'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexWrap: ['wrap', 'nowrap'],
    flexGrow: ['0', '1'],
    flexShrink: ['0', '1'],
    justifyContent: FLEX_CONTENT_ALIGNMENT,
    alignItems: FLEX_ITEMS_ALIGNMENT,
  },
  shorthands: {
    direction: ['flexDirection'],
    grow: ['flexGrow'],
    shrink: ['flexShrink'],
    align: ['alignItems'],
    justify: ['justifyContent'],
  },
});

const gridProperties = defineProperties({
  properties: {
    display: ['grid'],
    gridTemplateColumns: ['repeat(3, 1fr)'],
    gridAutoFlow: ['row', 'column', 'dense'],
    justifyContent: GRID_CONTENT_ALIGNMENT,
    justifyItems: GRID_ITEMS_ALIGNMENT,
    alignContent: GRID_CONTENT_ALIGNMENT,
    alignItems: GRID_ITEMS_ALIGNMENT,
  },
  shorthands: {
    templateColumns: ['gridTemplateColumns'],
    autoFlow: ['gridAutoFlow'],
  },
});

export const gridItemProperties = defineProperties({
  properties: {
    gridRowStart: GRID_CELL,
    gridRowEnd: GRID_CELL,
    gridColumnStart: GRID_CELL,
    gridColumnEnd: GRID_CELL,
  },
  shorthands: {
    rowStart: ['gridRowStart'],
    rowEnd: ['gridRowEnd'],
    columnStart: ['gridColumnStart'],
    columnEnd: ['gridColumnEnd'],
  },
});

export const flexStyles = createSprinkles(
  flexProperties,
  textProperties,
  layoutProperties,
);

export type FlexStyles = Parameters<typeof flexStyles>[0];

export const gridStyles = createSprinkles(
  gridProperties,
  textProperties,
  layoutProperties,
);

export const gridItemStyles = createSprinkles(
  gridItemProperties,
  textProperties,
  layoutProperties,
);

export type GridStyles = Parameters<typeof gridStyles>[0];
export type GridItemStyles = Parameters<typeof gridItemStyles>[0];
