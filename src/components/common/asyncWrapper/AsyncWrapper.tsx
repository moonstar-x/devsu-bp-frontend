import React from 'react';
import { Loading } from '$components/common/loading';
import { ErrorMessage } from '$components/common/errorMessage';

interface Props {
  loading?: boolean
  loadingFullScreen?: boolean
  error?: Error | string | unknown | null
  children?: React.ReactNode
}

export const AsyncWrapper: React.FC<Props> = ({ loading, loadingFullScreen, error, children }) => {
  if (loading) {
    return (
      <Loading fullScreen={loadingFullScreen} />
    );
  }

  if (error) {
    const errorObj = error instanceof Error ? error : new Error(`${error}`);

    return (
      <ErrorMessage error={errorObj} />
    );
  }

  return children;
};
