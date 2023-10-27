import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  fullScreen?: boolean
}

export const Loading: React.FC<Props> = ({ fullScreen }) => {
  return (
    <div className={clsx(styles.loaderWrapper, { [styles.fullScreenLoader]: fullScreen })}>
      <span className={styles.loader} />
    </div>
  );
};
