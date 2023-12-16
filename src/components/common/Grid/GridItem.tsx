import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

import { seperateProps } from '../utils';
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
    const { styleProps, nativeProps } = seperateProps<GridItemStyles>(
      gridItemStyles,
      props,
    );

    return (
      <div
        ref={ref}
        className={clsx(gridItemStyles(styleProps), className)}
        {...nativeProps}
      >
        {children}
      </div>
    );
  },
);

export default GridItem;

GridItem.displayName = 'GridItem';
