import React from 'react';
import { FormInput } from '$components/common/form/formInput';
import { LinkButton } from '$components/common/button';
import { RouteDefs } from '$components/router/routes.ts';
import styles from './styles.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <FormInput
        placeholder="Search..."
      />

      <LinkButton to={RouteDefs.productCreate}>
        Create
      </LinkButton>
    </div>
  );
};
