import React from 'react';
import { FormInput } from '$components/common/form/formInput';
import { LinkButton } from '$components/common/button';
import { RouteDefs } from '$components/router/routes.ts';
import styles from './styles.module.scss';

interface Props {
  onSearch?: (value: string) => void
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.currentTarget.value);
  };

  return (
    <div className={styles.searchBar}>
      <FormInput
        placeholder="Search..."
        onChange={handleInputChange}
      />

      <LinkButton to={RouteDefs.productCreate}>
        Create
      </LinkButton>
    </div>
  );
};
