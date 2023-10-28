import React, { Fragment } from 'react';
import { LogoHeader } from '$components/common/logo';
import { usePageTitle } from '$components/hooks/pageTitle.tsx';
import styles from './styles.module.scss';

interface Props {
  title: string
  children?: React.ReactNode
}

export const PageWrapper: React.FC<Props> = ({ title, children }) => {
  usePageTitle(title);

  return (
    <Fragment>
      <LogoHeader />

      <main className={styles.content}>
        {children}
      </main>
    </Fragment>
  );
};
