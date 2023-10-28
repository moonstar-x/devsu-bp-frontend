import React from 'react';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
  feedback?: string
}

export const FormInput = React.forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return (
    <input ref={ref} {...props} />
  );
});
