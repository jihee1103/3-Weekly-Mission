import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Shared from './pages/shared';
import Folder from './pages/folder';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
