import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  fluid?: boolean
  label?: string
  feedback?: string
}

export const FormInput = React.forwardRef<HTMLInputElement, Props>(({ fluid, label, feedback, className, ...props }, ref) => {
  return (
    <div className={clsx({ [styles.fluid]: fluid })}>
      {
        label && (
          <label>
            {label}
          </label>
        )
      }

      <input className={clsx(styles.input, { [styles.inputError]: !!feedback }, className)} ref={ref} {...props} />

      {
        feedback && (
          <span className={styles.feedback}>
            {feedback}
          </span>
        )
      }
    </div>
  );
});
