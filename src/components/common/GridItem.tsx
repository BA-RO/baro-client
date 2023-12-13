import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

import type { GridItemStyles } from '@/src/styles/sprinkles.css';
import { gridItemStyles } from '@/src/styles/sprinkles.css';

type HTMLProperties = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

interface GridItemProps extends GridItemStyles, HTMLProperties {
  className?: ClassValue;
}

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

    return (
      <div
        ref={ref}
        className={clsx(gridItemStyles(gridItemStyleProps), className)}
        {...nativeProps}
      >
        {children}
      </div>
    );
  },
);

export default GridItem;

GridItem.displayName = 'GridItem';
