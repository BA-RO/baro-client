import { type PropsWithChildren, useState } from 'react';

import {
  type DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface TanstackQueryProviderProps {
  dehydratedState: DehydratedState;
}

const TanstackQueryProvider = ({
  children,
  dehydratedState,
}: PropsWithChildren<TanstackQueryProviderProps>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
