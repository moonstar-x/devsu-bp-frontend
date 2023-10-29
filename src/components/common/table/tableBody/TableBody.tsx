import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {

}

export const TableBody: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <tbody className={clsx(styles.body, className)} {...props}>
      {children}
    </tbody>
  );
};
