import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// import PageTurner from '@layout/page-turner/PageTurner';
// import Folder from '@pages/folder-page/Folder.page';
import FolderPage from '@pages/folder-page/FolderPage';
import SharedPage from '@pages/shared-page/SharedPage';

const PrimaryRoute = (
  <Route path='/'>
    <Route path='shared' element={<SharedPage />} />
    <Route path='folder' element={<FolderPage />} />
  </Route>
);

const baseRoute = createRoutesFromElements(PrimaryRoute);

export const router = createBrowserRouter(baseRoute);
