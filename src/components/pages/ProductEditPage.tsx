import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageWrapper } from '$components/common/pageWrapper';
import { AsyncWrapper } from '$components/common/asyncWrapper';
import { FormBox } from '$components/common/form/formBox';
import { EditProductForm } from '$components/specific/product/productForm/EditProductForm.tsx';
import { useApiClient, useQuery } from '$components/hooks/api.tsx';
import { RouteDefs } from '$components/router';

const ProductEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const client = useApiClient();
  const { data: products, isLoading, error } = useQuery(client.products.searchProducts());

  // Given that the API does not have a method to get a single product, we do a local search.
  const product = (products ?? []).find((product) => product.id === id) ?? null;

  useEffect(() => {
    // Product does not exist in DB.
    if (!isLoading && !product) {
      navigate(RouteDefs.productSearch, { replace: true });
    }
  }, [isLoading, product]);

  const handleFormComplete = () => {
    navigate(RouteDefs.productSearch);
  };

  return (
    <PageWrapper title="Edit Product">
      <AsyncWrapper loading={isLoading} error={error}>
        {
          product && (
            <FormBox title="Edit Product Form">
              <EditProductForm product={product} onComplete={handleFormComplete} />
            </FormBox>
          )
        }
      </AsyncWrapper>
    </PageWrapper>
  );
};

export default ProductEditPage;
