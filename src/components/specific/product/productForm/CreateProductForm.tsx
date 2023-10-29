import React from 'react';
import { useApiClient, useMutation } from '$components/hooks/api.tsx';
import { ProductFormLogic } from './ProductFormLogic.tsx';
import { ProductMutationFormBody } from '$services/api/models/product.ts';

interface Props {
  onComplete?: () => void
}

export const CreateProductForm: React.FC<Props> = ({ onComplete }) => {
  const client = useApiClient();
  const createMutation = useMutation(client.products.createProduct());

  const handleSubmit = async (data: ProductMutationFormBody) => {
    // await createMutation.mutateAsync(data);
    console.log(createMutation, data);
    onComplete?.();
  };

  return (
    <ProductFormLogic onSubmit={handleSubmit} />
  );
};
