import React from 'react';
import SortDownIcon from '$assets/icons/sort-down-solid.svg?react';
import styles from './styles.module.scss';

interface Props<T> {
  value: T
  onClick?: () => void
}

export const DropdownTrigger = <T extends string | number>({ value, onClick }: Props<T>) => {
  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onClick?.();
    }
  };

  return (
    <span className={styles.trigger} role="button" tabIndex={0} onClick={onClick} onKeyDown={handleTriggerKeyDown}>
      {value}

      <SortDownIcon className={styles.triggerIcon} />
    </span>
  );
};
