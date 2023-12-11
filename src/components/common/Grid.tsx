import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLAttributes, Ref } from 'react';
import { createElement, forwardRef } from 'react';

import type { GridStyles } from '@/src/styles/sprinkles.css';
import { gridStyles } from '@/src/styles/sprinkles.css';

type HTMLProperties = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

type GridProps = GridStyles &
  HTMLProperties & {
    className?: ClassValue;
  };

const Grid = forwardRef(
  ({ children, className, ...props }: GridProps, ref: Ref<HTMLDivElement>) => {
    const gridStyleProps: GridStyles = { display: 'grid' };
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (gridStyles.properties.has(key as keyof GridStyles)) {
        gridStyleProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    return createElement(
      'div',
      {
        className: clsx(gridStyles(gridStyleProps), className),
        ref,
        ...nativeProps,
      },
      children,
    );
  },
);

export default Grid;

Grid.displayName = 'Grid';
