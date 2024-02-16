import { type PropsWithChildren } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface ResponsiveProps {
  className?: string;
}
const Responsive = ({
  children,
  className,
}: PropsWithChildren<ResponsiveProps>) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 768: 2, 1080: 3 }}>
      <Masonry className={className} gutter="16px">
        {children}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Responsive;
