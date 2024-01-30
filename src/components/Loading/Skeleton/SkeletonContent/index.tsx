import Skeleton from '..';
import * as styles from './style.css';

export const RATIOS = [30, 70, 60, 70, 40];

interface SkeletonContextProps {
  ratios?: number[];
}

const SkeletonContent = ({ ratios = RATIOS }: SkeletonContextProps) => {
  return (
    <div className={styles.skeletonContent}>
      {ratios.map((ratio, index) => (
        <Skeleton key={`${ratio}${index}`} width={`${ratio}%`} />
      ))}
    </div>
  );
};

export default SkeletonContent;
