import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '$components/common/pageWrapper';
import { FormBox } from '$components/common/form/formBox';
import { CreateProductForm } from '$components/specific/product/productForm';
import { RouteDefs } from '$components/router';

const ProductCreatePage = () => {
  const navigate = useNavigate();

  const handleFormComplete = () => {
    navigate(RouteDefs.productSearch);
  };

  return (
    <PageWrapper title="Create New Product">
      <FormBox title="Registry Form">
        <CreateProductForm onComplete={handleFormComplete} />
      </FormBox>
    </PageWrapper>
  );
};

export default ProductCreatePage;
