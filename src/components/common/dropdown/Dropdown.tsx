import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { DropdownTrigger } from './DropdownTrigger.tsx';
import { DropdownItem } from './DropdownItem.tsx';
import styles from './styles.module.scss';

interface Props<T extends any> {
  value: T
  options: T[]

  onChange?: (value: T) => void
}

export const Dropdown = <T extends string | number>({ value, options, onChange }: Props<T>) => {
  const [expand, setExpand] = useState<boolean>(false);
  const ref = useDetectClickOutside({
    onTriggered: () => {
      if (expand) {
        setExpand(false);
      }
    }
  });

  const handleItemClick = (value: T) => () => {
    setExpand(false);
    onChange?.(value);
  };

  const handleTriggerClick = () => {
    setExpand(!expand);
  };

  return (
    <div className={styles.dropdown} ref={ref}>
      <DropdownTrigger value={value} onClick={handleTriggerClick} />

      <div className={styles.menu}>
        {
          expand &&
          options.map((option, idx) => (
            <DropdownItem key={idx} value={option} onClick={handleItemClick(option)} />
          ))
        }
      </div>
    </div>
  );
};
