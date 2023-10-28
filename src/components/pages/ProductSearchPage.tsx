import React from 'react';
import { PageWrapper } from '$components/common/pageWrapper';
import { AsyncWrapper } from '$components/common/asyncWrapper';
import { SearchBar } from '$components/specific/search/searchBar';
import { useApiClient, useQuery } from '$components/hooks/api.tsx';

const ProductSearchPage = () => {
  const client = useApiClient();
  const { data, isLoading, error } = useQuery(client.products.searchProducts());

  return (
    <PageWrapper title="Product Search">
      <AsyncWrapper loading={isLoading} error={error}>
        <SearchBar />

        {JSON.stringify(data, null, 2)}
      </AsyncWrapper>
    </PageWrapper>
  );
};

export default ProductSearchPage;
