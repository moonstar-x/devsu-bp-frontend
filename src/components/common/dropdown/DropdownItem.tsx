import React from 'react';
import styles from './styles.module.scss';

interface Props<T> {
  value: T
  onClick: () => void
}

export const DropdownItem = <T extends string | number>({ value, onClick }: Props<T>) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <span className={styles.item} role="button" tabIndex={0} onClick={onClick} onKeyDown={handleKeyDown}>
      {value}
    </span>
  );
};
