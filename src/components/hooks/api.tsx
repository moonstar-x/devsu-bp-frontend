import { useContext } from 'react';
import { useQuery as useTanStackQuery, useMutation as useTanStackMutation, useQueryClient } from '@tanstack/react-query';
import { ApiClientContext } from '$components/context/ApiClientContext.tsx';
import { QueryRequest, MutationRequest } from '$services/api/client/Client.ts';

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

export const useMutation = <T extends any, U extends any>(request: MutationRequest<T, U>) => {
  const queryClient = useQueryClient();

  return useTanStackMutation({
    mutationFn: request.fn,
    mutationKey: request.key,
    onSuccess: () => {
      return request.onSuccess?.(queryClient);
    }
  });
};
