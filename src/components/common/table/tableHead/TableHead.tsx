import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {

}

export const TableHead: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <thead className={clsx(styles.head, className)} {...props}>
      {children}
    </thead>
  );
};
