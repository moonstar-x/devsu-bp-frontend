import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { ProductMutationFormBody } from '$services/api/models/product.ts';
import { ProductFormView } from './ProductFormView.tsx';

interface Props {
  onSubmit: SubmitHandler<ProductMutationFormBody>
  schema: Joi.Schema<ProductMutationFormBody>
  initialData?: ProductMutationFormBody
}

export const ProductFormLogic: React.FC<Props> = ({ onSubmit, schema, initialData }) => {
  const form = useForm({
    mode: 'onSubmit',
    resolver: joiResolver(schema),
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
