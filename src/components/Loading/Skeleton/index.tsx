import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './style.css';

const BORDER_RADIUS = {
  none: undefined,
  medium: '4px',
  full: '9999px',
};

interface SkeletonProps {
  width?: string;
  height?: string;
  radius?: keyof typeof BORDER_RADIUS;
}

const Skeleton = ({
  width = '100%',
  height = '12px',
  radius = 'medium',
}: SkeletonProps) => {
  return (
    <div
      className={styles.skeleton}
      style={assignInlineVars({
        [styles.width]: width,
        [styles.height]: height,
        [styles.radius]: BORDER_RADIUS[radius],
      })}
    />
  );
};

export default Skeleton;
