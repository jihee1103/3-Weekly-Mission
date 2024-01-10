import PageTurner from '@layout/page-turner/PageTurner';
import Folder from '@pages/folder-page/Folder.page';
import Shared from '@pages/shared-page/Shared.page';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const PrimaryRoute = (
  <Route path='/*' element={<PageTurner />}>
    <Route path='shared' element={<Shared />} />
    <Route path='folder' element={<Folder />} />
  </Route>
);

const baseRoute = createRoutesFromElements(PrimaryRoute);
export const router = createBrowserRouter(baseRoute);
