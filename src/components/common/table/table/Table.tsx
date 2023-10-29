import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {

}

export const Table: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <table className={clsx(styles.table, className)} {...props}>
      {children}
    </table>
  );
};
