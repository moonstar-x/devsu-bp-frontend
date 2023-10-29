import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Box: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <div className={clsx(styles.box, className)} {...props}>
      {children}
    </div>
  );
};
