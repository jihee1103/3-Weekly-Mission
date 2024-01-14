import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import PageTurner from '@layout/page-turner/PageTurner';
import Folder from '@pages/folder-page/Folder.page';
import MordalPracticePage from '@pages/mordal-practice-page/MordalPracticePage';
import Shared from '@pages/shared-page/Shared.page';

const PrimaryRoute = (
  <Route path='/*' element={<PageTurner />}>
    <Route path='shared' element={<Shared />} />
    <Route path='folder' element={<Folder />} />
    <Route path='mordal' element={<MordalPracticePage />} />
  </Route>
);

const baseRoute = createRoutesFromElements(PrimaryRoute);

export const router = createBrowserRouter(baseRoute);
