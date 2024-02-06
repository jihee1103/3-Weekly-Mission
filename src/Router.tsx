import { Routes, Route } from 'react-router-dom';
import SharePage from './pages/SharePage/SharePage';
import FolderPage from './pages/FolderPage/FolderPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/shared" element={<SharePage />} />
      <Route path="/folder" element={<FolderPage />} />
    </Routes>
  );
}
