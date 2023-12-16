import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

import { seperateProps } from '../utils';
import type { GridStyles } from '@/src/styles/sprinkles.css';
import { gridStyles } from '@/src/styles/sprinkles.css';

type HTMLProperties = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

interface GridProps extends GridStyles, HTMLProperties {
  className?: ClassValue;
}

const Grid = forwardRef(
  ({ children, className, ...props }: GridProps, ref: Ref<HTMLDivElement>) => {
    const { styleProps, nativeProps } = seperateProps<GridStyles>(
      gridStyles,
      props,
      { display: 'grid' },
    );

    return (
      <div
        ref={ref}
        className={clsx(gridStyles(styleProps), className)}
        {...nativeProps}
      >
        {children}
      </div>
    );
  },
);

export default Grid;

Grid.displayName = 'Grid';
