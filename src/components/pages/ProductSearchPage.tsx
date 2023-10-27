import React from 'react';
import { PageWrapper } from '$components/common/pageWrapper';
import { AsyncWrapper } from '$components/common/asyncWrapper';
import { useApiClient, useQuery } from '$components/hooks/api.tsx';

const ProductSearchPage = () => {
  const client = useApiClient();
  const { data, isLoading, error } = useQuery(client.products.searchProducts());

  return (
    <PageWrapper title="Product Search">
      <AsyncWrapper loading={isLoading} loadingFullScreen error={error}>
        {JSON.stringify(data, null, 2)}
      </AsyncWrapper>
    </PageWrapper>
  );
};

export default ProductSearchPage;
