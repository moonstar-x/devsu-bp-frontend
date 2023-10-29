import React from 'react';
import { PageWrapper } from '$components/common/pageWrapper';
import { AsyncWrapper } from '$components/common/asyncWrapper';
import { SearchBar } from '$components/specific/search/searchBar';
import { Box } from '$components/common/box';
import { ProductTable } from '$components/specific/product/productTable';
import { useApiClient, useQuery } from '$components/hooks/api.tsx';

const ProductSearchPage = () => {
  const client = useApiClient();
  const { data: products, isLoading, error } = useQuery(client.products.searchProducts());

  return (
    <PageWrapper title="Product Search">
      <AsyncWrapper loading={isLoading} error={error}>
        <SearchBar />

        <Box>
          <ProductTable products={products ?? []} />
        </Box>
      </AsyncWrapper>
    </PageWrapper>
  );
};

export default ProductSearchPage;
