import React from 'react';
import styles from './styles.module.scss';

interface Props {
  resultCount: number
}

export const PaginationBar: React.FC<Props> = ({ resultCount }) => {
  const resultText = resultCount === 1 ?
    `1 Result` :
    `${resultCount} Results`;

  return (
    <div className={styles.paginationBar}>
      <span>
        {resultText}
      </span>

      <span>
        PAGINATION
      </span>

      <span>
        DROPDOWN
      </span>
    </div>
  );
};
