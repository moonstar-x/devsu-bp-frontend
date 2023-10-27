import React from 'react';
import styles from './styles.module.scss';

interface Props {
  error?: Error | null
}

export const ErrorMessage: React.FC<Props> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className={styles.message}>
      <h2 className={styles.title}>
        An error has occurred!
      </h2>

      <p className={styles.description}>
        If you're seeing this message, something wrong happened. Please refresh the page and try again.
      </p>

      <p className={styles.description}>
        Received error: <strong>{error.message}</strong>
      </p>
    </div>
  );
};
