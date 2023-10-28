import React from 'react';
import { PageWrapper } from '$components/common/pageWrapper';
import { FormBox } from '$components/common/form/formBox';
import { CreateProductForm } from '$components/specific/product/productForm';

const ProductCreatePage = () => {
  return (
    <PageWrapper title="Create New Product">
      <FormBox title="Registry Form">
        <CreateProductForm />
      </FormBox>
    </PageWrapper>
  );
};

export default ProductCreatePage;
