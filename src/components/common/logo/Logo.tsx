import React from 'react';
import LogoIcon from '$assets/logo.svg?react';
import styles from './styles.module.scss';

export const Logo = () => {
  return (
    <LogoIcon className={styles.logo} />
  );
};
