import React, { Fragment } from 'react';
import { LogoHeader } from '$components/common/logo';
import { usePageTitle } from '$components/hooks/pageTitle.tsx';

interface Props {
  title: string
  children?: React.ReactNode
}

export const PageWrapper: React.FC<Props> = ({ title, children }) => {
  usePageTitle(title);

  return (
    <Fragment>
      <LogoHeader />

      <main>
        {children}
      </main>
    </Fragment>
  );
};
