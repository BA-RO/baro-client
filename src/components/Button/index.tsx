import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import * as styles from './style.css';

interface ButtonProps
  extends RecipeVariants<typeof styles.button>,
    PropsWithChildren<ComponentPropsWithoutRef<'button'>> {
  onClick: () => void;
}

const Button = ({
  children,
  className,
  size,
  state,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button({ state, size }), className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
