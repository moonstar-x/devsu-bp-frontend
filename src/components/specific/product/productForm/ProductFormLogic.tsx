import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useApiClient } from '$components/hooks/api.tsx';
import { ProductMutationFormBody } from '$services/api/models/product.ts';
import { createProductSchema } from '$services/api/schemas/product.ts';
import { ProductFormView } from './ProductFormView.tsx';

interface Props {
  onSubmit: SubmitHandler<ProductMutationFormBody>
  initialData?: ProductMutationFormBody
}

export const ProductFormLogic: React.FC<Props> = ({ onSubmit, initialData }) => {
  const client = useApiClient();
  const form = useForm({
    mode: 'all',
    resolver: joiResolver(createProductSchema(client), { abortEarly: false }, { mode: 'async' }),
    defaultValues: initialData
  });
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = async (data: ProductMutationFormBody) => {
    setError(null);

    try {
      await onSubmit(data);
    } catch (error) {
      console.error(error);
      setError(error as Error);
    }
  };

  return (
    <ProductFormView form={form} onSubmit={handleSubmit} error={error} />
  );
};
