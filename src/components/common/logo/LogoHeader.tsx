import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.tsx';
import { RouteDefs } from '$components/router';
import styles from './styles.module.scss';

export const LogoHeader = () => {
  return (
    <header className={styles.header}>
      <Link to={RouteDefs.productSearch}>
        <Logo />
      </Link>
    </header>
  );
};
