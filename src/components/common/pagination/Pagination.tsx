import React from 'react';
import { FormInput } from '$components/common/form/formInput';
import FirstIcon from '$assets/icons/angles-left-solid.svg?react';
import LeftIcon from '$assets/icons/angle-left-solid.svg?react';
import RightIcon from '$assets/icons/angle-right-solid.svg?react';
import LastIcon from '$assets/icons/angles-right-solid.svg?react';
import styles from './styles.module.scss';

interface Props {
  page: number
  maxPage: number
  onChange?: (page: number) => void
}

export const Pagination: React.FC<Props> = ({ page, maxPage, onChange }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === maxPage;

  const handleFirstClicked = () => {
    onChange?.(1);
  };

  const handlePreviousClicked = () => {
    onChange?.(page - 1);
  };

  const handleNextClicked = () => {
    onChange?.(page + 1);
  };

  const handleLastClicked = () => {
    onChange?.(maxPage);
  };

  return (
    <div className={styles.pagination}>
      <button data-testid="btn-first" className={styles.button} onClick={handleFirstClicked} disabled={isFirstPage} title="First page">
        <FirstIcon className={styles.icon} />
      </button>

      <button data-testid="btn-previous" className={styles.button} onClick={handlePreviousClicked} disabled={isFirstPage} title="Previous page">
        <LeftIcon className={styles.icon} />
      </button>

      <FormInput className={styles.input} value={page} disabled />

      <button data-testid="btn-next" className={styles.button} onClick={handleNextClicked} disabled={isLastPage} title="Next page">
        <RightIcon className={styles.icon} />
      </button>

      <button data-testid="btn-last" className={styles.button} onClick={handleLastClicked} disabled={isLastPage} title="Last page">
        <LastIcon className={styles.icon} />
      </button>
    </div>
  );
};
