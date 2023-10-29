import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {

}

export const Avatar: React.FC<Props> = ({ className, alt, ...props }) => {
  return (
    <img className={clsx(styles.avatar, className)} alt={alt ?? 'image'} {...props} />
  );
};
