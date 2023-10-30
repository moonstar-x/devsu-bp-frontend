import React from 'react';
import dayjs from 'dayjs';
import { useApiClient, useMutation } from '$components/hooks/api.tsx';
import { ProductFormLogic } from './ProductFormLogic.tsx';
import { ProductMutationFormBody, ProductModel } from '$services/api/models/product.ts';

interface Props {
  product: ProductModel
  onComplete?: () => void
}

export const EditProductForm: React.FC<Props> = ({ product, onComplete }) => {
  const client = useApiClient();
  const editMutation = useMutation(client.products.updateProduct());

  const handleSubmit = async (data: ProductMutationFormBody) => {
    console.log('Will update product with the following data:', data);
    await editMutation.mutateAsync(data);
    onComplete?.();
  };

  const { dateRelease, dateRevision, ...restOfProduct } = product;
  const initialData: ProductMutationFormBody = {
    ...restOfProduct,
    date_release: dayjs(dateRelease).format('YYYY-MM-DD'),
    date_revision: dayjs(dateRevision).format('YYYY-MM-DD')
  };

  return (
    <ProductFormLogic onSubmit={handleSubmit} initialData={initialData} editing />
  );
};
