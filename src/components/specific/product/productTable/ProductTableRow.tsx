import React from 'react';
import dayjs from 'dayjs';
import { ProductModel } from '$services/api/models/product.ts';
import { Avatar } from '$components/common/avatar';
import { ProductTableRowMenu } from './ProductTableRowMenu.tsx';

interface Props extends ProductModel {

}

export const ProductTableRow: React.FC<Props> = ({ id, logo, name, description, dateRevision, dateRelease }) => {
  const formattedReleaseDate = dayjs(dateRelease).format('DD/MM/YYYY');
  const formattedRevisionDate = dayjs(dateRevision).format('DD/MM/YYYY');

  return (
    <tr>
      <td style={{ textAlign: 'center' }}>
        <Avatar src={logo} />
      </td>

      <td>
        {name}
      </td>

      <td>
        {description}
      </td>

      <td>
        {formattedReleaseDate}
      </td>

      <td>
        {formattedRevisionDate}
      </td>

      <ProductTableRowMenu id={id} name={name} />
    </tr>
  );
};
