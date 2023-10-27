import React from 'react';
import { Logo } from './Logo.tsx';
import styles from './styles.module.scss';

export const LogoHeader = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
