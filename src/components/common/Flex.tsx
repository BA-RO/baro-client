import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

import type { FlexStyles } from '@/src/styles/sprinkles.css';
import { flexStyles } from '@/src/styles/sprinkles.css';

type HTMLProperties = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

type FlexProps = FlexStyles &
  HTMLProperties & {
    className?: ClassValue;
  };

const Flex = forwardRef(
  ({ children, className, ...props }: FlexProps, ref: Ref<HTMLDivElement>) => {
    const flexStyleProps: FlexStyles = { display: 'flex' };
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (flexStyles.properties.has(key as keyof FlexStyles)) {
        flexStyleProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    return (
      <div
        ref={ref}
        className={clsx(flexStyles(flexStyleProps), className)}
        {...nativeProps}
      >
        {children}
      </div>
    );
  },
);

export default Flex;

Flex.displayName = 'Flex';
