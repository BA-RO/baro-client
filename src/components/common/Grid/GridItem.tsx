import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

interface GridItemProps extends HTMLAttributes<HTMLDivElement> {}

const GridItem = forwardRef(
  (
    { children, className, ...props }: GridItemProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  },
);

export default GridItem;

GridItem.displayName = 'GridItem';
