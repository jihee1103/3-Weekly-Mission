import { Route } from 'react-router-dom';
import SharePage from './pages/SharePage/SharePage';
import FolderPage from './pages/FolderPage/FolderPage';

export default function Router() {
  return (
    <Route>
      <Route path="/shared" element={<SharePage />} />
      <Route path="/folder" element={<FolderPage />} />
    </Route>
  );
}
