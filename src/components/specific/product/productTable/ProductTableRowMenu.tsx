/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useModal } from '@ebay/nice-modal-react';
import { DeleteProductModal } from '$components/specific/product/deleteProductModal';
import MenuIcon from '$assets/icons/ellipsis-vertical-solid.svg?react';
import styles from './styles.module.scss';
import { RouteDefs } from '$components/router';

interface Props {
  id: string
  name: string
}

export const ProductTableRowMenu: React.FC<Props> = ({ id, name }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const ref = useDetectClickOutside({
    onTriggered: () => {
      if (expand) {
        setExpand(false);
      }
    }
  });
  const deleteModal = useModal(DeleteProductModal);

  const handleMenuClick = () => {
    setExpand(!expand);
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleMenuClick();
    }
  };

  const handleDeleteClick = () => {
    deleteModal.show({ name, id });
  };

  const handleDeleteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleDeleteClick();
    }
  };

  return (
    <td ref={ref} className={styles.menuIconWrapper} role="button" tabIndex={0} onClick={handleMenuClick} onKeyDown={handleMenuKeyDown}>
      <MenuIcon className={styles.menuIcon} />

      {
        expand && (
          <div className={styles.menu}>
            <Link className={styles.item} to={RouteDefs.productEdit(id)}>
              Update
            </Link>

            <span className={styles.item} role="button" tabIndex={0} onClick={handleDeleteClick} onKeyDown={handleDeleteKeyDown}>
              Delete
            </span>
          </div>
        )
      }
    </td>
  );
};
