import { type PropsWithChildren } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import * as styles from './style.css';

interface ResponsiveProps {
  className?: string;
  columnsCountBreakPoints?: Record<number, number>;
}
const Responsive = ({
  children,
  className,
  columnsCountBreakPoints = { 0: 1, 768: 2, 1080: 3 },
}: PropsWithChildren<ResponsiveProps>) => {
  return (
    <ResponsiveMasonry
      className={className}
      columnsCountBreakPoints={columnsCountBreakPoints}
    >
      <Masonry className={styles.responsive} gutter="16px">
        {children}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Responsive;
