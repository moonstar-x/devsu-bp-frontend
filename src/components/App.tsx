import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Router } from '$components/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: false
    }
  }
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
