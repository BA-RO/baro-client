import type { PropsWithChildren } from 'react';

import * as styles from './style.css';

interface BadgeProps {
  color:
    | 'blue'
    | 'green'
    | 'yellow'
    | 'red'
    | 'orange'
    | 'purple'
    | 'grey'
    | 'black';
}

const Badge = ({ children, color }: PropsWithChildren<BadgeProps>) => {
  return <span className={styles.badge({ color })}>{children}</span>;
};

export default Badge;
