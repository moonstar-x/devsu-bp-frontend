import React from 'react';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

export const FormInput: React.FC<Props> = ({ ...props }) => {
  return (
    <input {...props} />
  );
};
