import React, { useEffect } from 'react';
import { SubmitHandler, UseFormReturn, useWatch } from 'react-hook-form';
import dayjs from 'dayjs';
import { ErrorMessage } from '$components/common/errorMessage';
import { Form } from '$components/common/form/form';
import { FormInput } from '$components/common/form/formInput';
import { FormFieldGroup } from '$components/common/form/formFieldGroup';
import { FormActions } from '$components/common/form/formActions';
import { Button } from '$components/common/button';
import { ProductMutationFormBody } from '$services/api/models/product.ts';

interface Props {
  form: UseFormReturn<ProductMutationFormBody>
  onSubmit: SubmitHandler<ProductMutationFormBody>
  error?: Error | null
  editing?: boolean
}

export const ProductFormView: React.FC<Props> = ({ form, onSubmit, error, editing }) => {
  const { handleSubmit, register, reset, setValue, trigger, formState: { errors, isSubmitting } } = form;
  const { date_release: insertedDateRelease } = useWatch(form);

  const minReleaseDate = dayjs(new Date()).format('YYYY-MM-DD');

  useEffect(() => {
    if (insertedDateRelease) {
      const insertedDateReleaseFormatted = insertedDateRelease instanceof Date ? dayjs(insertedDateRelease).format('YYYY-MM-DD') : insertedDateRelease;

      const insertedDateParts = insertedDateReleaseFormatted.split('-');
      insertedDateParts[0] = (parseInt(insertedDateParts[0], 10) + 1).toString();

      const computedDateRevision = insertedDateParts.join('-');

      setValue('date_revision', computedDateRevision);
      trigger('date_revision');
    }
  }, [insertedDateRelease]);

  const handleResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ErrorMessage error={error} />

      <FormFieldGroup>
        <FormInput
          fluid
          type="text"
          label="ID"
          feedback={errors.id?.message}
          disabled={editing}
          {...register('id')}
        />

        <FormInput
          fluid
          type="text"
          label="Name"
          feedback={errors.name?.message}
          {...register('name')}
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <FormInput
          fluid
          type="text"
          label="Description"
          feedback={errors.description?.message}
          {...register('description')}
        />

        <FormInput
          fluid
          type="text"
          label="Logo"
          feedback={errors.logo?.message}
          {...register('logo')}
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <FormInput
          fluid
          type="date"
          label="Release Date"
          min={minReleaseDate}
          feedback={errors.date_release?.message}
          {...register('date_release')}
        />

        <FormInput
          fluid
          type="date"
          label="Revision Date"
          disabled
          feedback={errors.date_revision?.message}
          {...register('date_revision')}
        />
      </FormFieldGroup>

      <FormActions>
        <Button color="gray" onClick={handleResetClick} disabled={isSubmitting}>
          Reset
        </Button>

        <Button color="primary" type="submit" disabled={isSubmitting}>
          {
            editing ? 'Edit' : 'Create'
          }
        </Button>
      </FormActions>
    </Form>
  );
};
