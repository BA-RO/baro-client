import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import * as styles from './style.css';

type ButtonProps = RecipeVariants<typeof styles.button> &
  PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

const Button = ({
  children,
  className,
  size,
  state,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.button({ state, size }), className)}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
