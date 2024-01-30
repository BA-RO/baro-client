import { type PropsWithChildren, type ReactNode, Suspense } from 'react';

import ErrorBoundary from './components/ErrorBoundary';

interface AsyncBoundaryProps {
  loadingFallback?: ReactNode;
}

const AsyncBoundary = ({
  children,
  loadingFallback = <div>로딩중</div>,
}: PropsWithChildren<AsyncBoundaryProps>) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
