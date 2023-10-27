import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouteDefs } from './routes.ts';
import ProductSearchPage from '$components/pages/ProductSearchPage.tsx';
import ProductCreatePage from '$components/pages/ProductCreatePage.tsx';
import ProductEditPage from '$components/pages/ProductEditPage.tsx';
import NotFoundPage from '$components/pages/NotFoundPage.tsx';

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
