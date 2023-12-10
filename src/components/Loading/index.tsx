import type { FC } from 'react';

import Spinner from './components/Spinner';

type LoadingViewType = 'spinner';

interface LoadingViewProps {
  type?: LoadingViewType;
}

const LoadingView: FC<LoadingViewProps> = ({ type = 'spinner' }) => {
  switch (type) {
    default:
      return <Spinner />;
  }
};

export default LoadingView;
