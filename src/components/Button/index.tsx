import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type PropsWithChildren,
} from 'react';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import * as styles from './style.css';

type ButtonProps = RecipeVariants<typeof styles.button> &
  PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      size,
      state,
      style,
      type = 'button',
      onClick,
      onFocus,
      onBlur,
      onMouseOver,
      onMouseOut,
    },
    ref,
  ) => {
    return (
      <button
        className={clsx(styles.button({ state, size }), className)}
        disabled={disabled}
        style={style}
        type={type}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
