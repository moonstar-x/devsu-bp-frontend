import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NiceModal from '@ebay/nice-modal-react';
import { Router } from '$components/router';
import { ApiClientContextProvider } from '$components/context/ApiClientContext.tsx';

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
    <ApiClientContextProvider>
      <QueryClientProvider client={queryClient}>
        <NiceModal.Provider>
          <Router />

          <ReactQueryDevtools initialIsOpen={false} />
        </NiceModal.Provider>
      </QueryClientProvider>
    </ApiClientContextProvider>
  );
};
