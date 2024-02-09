import { type CSSProperties } from 'react';

import Skeleton from '..';
import * as styles from './style.css';

export const RATIOS = [30, 80, 60, 80, 40];

interface SkeletonContextProps {
  ratios?: number[];
  style?: CSSProperties;
}

const SkeletonContent = ({ ratios = RATIOS, style }: SkeletonContextProps) => {
  return (
    <div className={styles.skeletonContent} style={style}>
      {ratios.map((ratio, index) => (
        <Skeleton key={`${ratio}${index}`} width={`${ratio}%`} />
      ))}
    </div>
  );
};

export default SkeletonContent;
