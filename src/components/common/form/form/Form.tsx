import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {

}

export const Form: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <form className={clsx(styles.form, className)} {...props}>
      {children}
    </form>
  );
};
