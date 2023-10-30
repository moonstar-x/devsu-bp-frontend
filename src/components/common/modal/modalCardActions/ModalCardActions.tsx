import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode
}

export const ModalCardActions: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.actions}>
      {children}
    </div>
  );
};
