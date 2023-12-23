import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

interface GridProps extends HTMLAttributes<HTMLDivElement> {}

const Grid = forwardRef(
  ({ children, className, ...props }: GridProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  },
);

export default Grid;

Grid.displayName = 'Grid';
