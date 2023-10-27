import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouteDefs } from './routes.ts';
import ItemSearchPage from '$components/pages/ItemSearchPage.tsx';
import ItemCreatePage from '$components/pages/ItemCreatePage.tsx';
import ItemEditPage from '$components/pages/ItemEditPage.tsx';
import NotFoundPage from '$components/pages/NotFoundPage.tsx';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteDefs.itemSearch} element={<ItemSearchPage />} />
        <Route path={RouteDefs.itemCreate} element={<ItemCreatePage />} />
        <Route path={RouteDefs.itemEdit(':id')} element={<ItemEditPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
