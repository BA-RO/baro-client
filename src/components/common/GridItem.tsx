import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLAttributes, Ref } from 'react';
import { createElement, forwardRef } from 'react';

import type { GridItemStyles } from '@/src/styles/sprinkles.css';
import { gridItemStyles } from '@/src/styles/sprinkles.css';

type HTMLProperties = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

type GridItemProps = GridItemStyles &
  HTMLProperties & {
    className?: ClassValue;
  };

const GridItem = forwardRef(
  (
    { children, className, ...props }: GridItemProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const gridItemStyleProps: GridItemStyles = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (gridItemStyles.properties.has(key as keyof GridItemStyles)) {
        gridItemStyleProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    return createElement(
      'div',
      {
        className: clsx(gridItemStyles(gridItemStyleProps), className),
        ref,
        ...nativeProps,
      },
      children,
    );
  },
);

export default GridItem;

GridItem.displayName = 'GridItem';
