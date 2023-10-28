import React from 'react';
import styles from './styles.module.scss';

interface Props {
  title?: string
  children?: React.ReactNode
}

export const FormBox: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.box}>
        {
          title && (
            <h1 className={styles.title}>
              {title}
            </h1>
          )
        }

        {children}
      </div>
    </div>
  );
};
