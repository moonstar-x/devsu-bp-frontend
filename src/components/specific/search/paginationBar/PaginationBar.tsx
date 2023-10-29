import React, { useState, useEffect } from 'react';
import { Dropdown } from '$components/common/dropdown';
import { Pagination } from '$components/common/pagination';
import styles from './styles.module.scss';

const DEFAULT_PAGINATION_COUNT = 5;
const PAGINATION_VALUES = [5, 10, 20];

interface Props {
  resultCount: number
  onChange?: (page: number, paginationCount: number) => void
}

export const PaginationBar: React.FC<Props> = ({ resultCount, onChange }) => {
  const [paginationCount, setPaginationCount] = useState<number>(DEFAULT_PAGINATION_COUNT);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    onChange?.(page, paginationCount);
  }, [page, paginationCount]);

  const resultText = resultCount === 1 ?
    `1 Result` :
    `${resultCount} Results`;
  const maxPage = Math.ceil(resultCount / paginationCount);

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const handleDropdownChange = (value: number) => {
    setPaginationCount(value);
    setPage(1);
  };

  return (
    <div className={styles.paginationBar}>
      <span>
        {resultText}
      </span>

      <Pagination page={page} maxPage={maxPage} onChange={handlePageChange} />

      <Dropdown value={paginationCount} options={PAGINATION_VALUES} onChange={handleDropdownChange} />
    </div>
  );
};
