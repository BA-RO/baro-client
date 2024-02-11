import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
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
  onClick,
  type = 'button',
  onFocus,
  onBlur,
  onMouseOver,
  onMouseOut,
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button({ state, size }), className)}
      type={type}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </button>
  );
};

export default Button;
