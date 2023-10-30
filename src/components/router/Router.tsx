import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouteDefs } from './routes.ts';

const ProductSearchPage = React.lazy(() => import('$components/pages/ProductSearchPage.tsx'));
const ProductCreatePage = React.lazy(() => import('$components/pages/ProductCreatePage.tsx'));
const ProductEditPage = React.lazy(() => import('$components/pages/ProductEditPage.tsx'));
const NotFoundPage = React.lazy(() => import('$components/pages/NotFoundPage.tsx'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteDefs.productSearch} element={<ProductSearchPage />} />
        <Route path={RouteDefs.productCreate} element={<ProductCreatePage />} />
        <Route path={RouteDefs.productEdit(':id')} element={<ProductEditPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
