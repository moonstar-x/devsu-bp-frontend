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
    console.log('Will create new product with the following data:', data);
    await createMutation.mutateAsync(data);
    onComplete?.();
  };

  return (
    <ProductFormLogic onSubmit={handleSubmit} />
  );
};
