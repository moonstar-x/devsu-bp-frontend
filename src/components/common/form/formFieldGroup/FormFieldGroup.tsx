import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode
}

export const FormFieldGroup: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.group}>
      {children}
    </div>
  );
};
