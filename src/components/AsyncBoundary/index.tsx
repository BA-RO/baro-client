import { type PropsWithChildren, type ReactNode, Suspense } from 'react';

import LoadingView from '../Loading';
import ErrorBoundary from './components/ErrorBoundary';

interface AsyncBoundaryProps {
  loadingFallback?: ReactNode;
}

const AsyncBoundary = ({
  children,
  loadingFallback = <LoadingView />,
}: PropsWithChildren<AsyncBoundaryProps>) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
