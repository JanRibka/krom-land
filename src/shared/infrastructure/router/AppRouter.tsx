import { Route, Routes } from 'react-router-dom';

import ActionsPage from '../../../krom_land/features/pages/ActionsPage';
import ContactPage from '../../../krom_land/features/pages/ContactPage';
import GalleryPage from '../../../krom_land/features/pages/GalleryPage';
import HomePage from '../../../krom_land/features/pages/HomePage';
import { AppRoute } from './appRoutes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<HomePage />} />
      <Route path={AppRoute.Actions} element={<ActionsPage />} />
      <Route path={AppRoute.Gallery} element={<GalleryPage />} />
      <Route path={AppRoute.Contact} element={<ContactPage />} />
    </Routes>
  );
};

export default AppRouter;
