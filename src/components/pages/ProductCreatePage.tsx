import React from 'react';
import { PageWrapper } from '$components/common/pageWrapper';
import { CreateProductForm } from '$components/specific/product/productForm';

const ProductCreatePage = () => {
  return (
    <PageWrapper title="Create New Product">
      <CreateProductForm />
    </PageWrapper>
  );
};

export default ProductCreatePage;
