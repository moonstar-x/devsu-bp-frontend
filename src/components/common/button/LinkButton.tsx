import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';
import { Color, resolveColorStyle } from './shared.ts';
import styles from './styles.module.scss';

interface Props extends LinkProps {
  color?: Color
}

export const LinkButton: React.FC<Props> = ({ color, className, children, ...props }) => {
  return (
    <Link className={clsx(styles.button, resolveColorStyle(color), className)} {...props}>
      {children}
    </Link>
  );
};
