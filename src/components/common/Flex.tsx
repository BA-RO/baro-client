import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

import { seperateProps } from './utils';
import type { FlexStyles } from '@/src/styles/sprinkles.css';
import { flexStyles } from '@/src/styles/sprinkles.css';

type HTMLProperties = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

interface FlexProps extends FlexStyles, HTMLProperties {
  className?: ClassValue;
}

const Flex = forwardRef(
  ({ children, className, ...props }: FlexProps, ref: Ref<HTMLDivElement>) => {
    const { styleProps, nativeProps } = seperateProps<FlexStyles>(
      flexStyles,
      props,
      { display: 'flex' },
    );

    return (
      <div
        ref={ref}
        className={clsx(flexStyles(styleProps), className)}
        {...nativeProps}
      >
        {children}
      </div>
    );
  },
);

export default Flex;

Flex.displayName = 'Flex';
