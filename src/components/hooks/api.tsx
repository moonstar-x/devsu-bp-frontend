import { useContext } from 'react';
import { useQuery as useTanStackQuery } from '@tanstack/react-query';
import { ApiClientContext } from '$components/context/ApiClientContext.tsx';
import { QueryRequest } from '$services/api/client/Client.ts';

export const useApiClient = () => {
  const { client } = useContext(ApiClientContext);
  return client;
};

export const useQuery = <T extends any>(request: QueryRequest<T>) => {
  return useTanStackQuery({
    queryFn: request.fn,
    queryKey: request.key
  });
};
