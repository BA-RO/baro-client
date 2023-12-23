import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {}

const Flex = forwardRef(
  ({ children, className, ...props }: FlexProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  },
);

export default Flex;

Flex.displayName = 'Flex';
