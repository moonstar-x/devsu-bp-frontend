import React, { useState } from 'react';
import { PageWrapper } from '$components/common/pageWrapper';
import { AsyncWrapper } from '$components/common/asyncWrapper';
import { SearchBar } from '$components/specific/search/searchBar';
import { Box } from '$components/common/box';
import { ProductTable } from '$components/specific/product/productTable';
import { PaginationBar } from '$components/specific/search/paginationBar';
import { useApiClient, useQuery } from '$components/hooks/api.tsx';

const ProductSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [paginationCount, setPaginationCount] = useState<number>(5);

  const client = useApiClient();
  const { data: products, isLoading, error } = useQuery(client.products.searchProducts());

  // Given that the API returns all objects, we're doing a local search.
  const filteredProducts = (products ?? []).filter((product) => {
    if (!searchTerm) {
      return true;
    }

    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Given that the API returns all objects, we're doing a local pagination.
  const pageStartIndex = (page - 1) * paginationCount;
  const pageEndIndex = pageStartIndex + paginationCount;
  const paginatedProducts = filteredProducts.slice(pageStartIndex, pageEndIndex);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handlePaginationChange = (page: number, paginationCount: number) => {
    setPage(page);
    setPaginationCount(paginationCount);
  };

  return (
    <PageWrapper title="Product Search">
      <AsyncWrapper loading={isLoading} error={error}>
        <SearchBar onSearch={handleSearchChange} />

        <Box>
          <ProductTable products={paginatedProducts} />

          <PaginationBar onChange={handlePaginationChange} resultCount={filteredProducts.length} />
        </Box>
      </AsyncWrapper>
    </PageWrapper>
  );
};

export default ProductSearchPage;
