import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/header/index';
import Shared from './pages/shared';
import Folder from './pages/folder';
import Footer from './components/footer/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
