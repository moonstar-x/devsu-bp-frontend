/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import MenuIcon from '$assets/icons/ellipsis-vertical-solid.svg?react';
import styles from './styles.module.scss';

interface Props {
  id: string
}

export const ProductTableRowMenu: React.FC<Props> = ({ id }) => {
  const handleClick = () => {
    console.log('menu item click', id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <td className={styles.menuIconWrapper} role="button" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
      <MenuIcon className={styles.menuIcon} />
    </td>
  );
};
