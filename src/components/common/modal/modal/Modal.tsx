import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode
}

export const Modal: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.modal}>
      {children}
    </div>
  );
};
