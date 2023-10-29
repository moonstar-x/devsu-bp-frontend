import React from 'react';
import { Table } from '$components/common/table/table';
import { TableHead } from '$components/common/table/tableHead';
import { TableBody } from '$components/common/table/tableBody';
import { ProductTableRow } from './ProductTableRow.tsx';
import { ProductModel } from '$services/api/models/product.ts';

interface Props {
  products: ProductModel[]
}

export const ProductTable: React.FC<Props> = ({ products }) => {
  const headers = [
    'Logo',
    'Product Name',
    'Description',
    'Release Date',
    'Revision Date',
    '' // Empty item is for menu button.
  ];

  return (
    <Table>
      <TableHead>
        <tr>
          {
            headers.map((header, idx) => (
              <th key={idx}>
                {header}
              </th>
            ))
          }
        </tr>
      </TableHead>

      <TableBody>
        {
          products.map((product) => (
            <ProductTableRow key={product.id} {...product} />
          ))
        }
      </TableBody>
    </Table>
  );
};
