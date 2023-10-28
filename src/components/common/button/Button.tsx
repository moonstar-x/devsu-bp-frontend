import React from 'react';
import clsx from 'clsx';
import { Color, resolveColorStyle } from './shared.ts';
import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: Color
}

export const Button: React.FC<Props> = ({ color, className, children, ...props }) => {
  return (
    <button className={clsx(styles.button, resolveColorStyle(color), className)} {...props}>
      {children}
    </button>
  );
};
