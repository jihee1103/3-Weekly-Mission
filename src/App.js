import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './header/index';
import Favorites from './shared/favorites/index';
import Search from './search/index';
import CardList from './card-list/index';
import AddLink from './folder/addLink/index';
import Footer from './footer/index';

function Shared() {
  return (
    <>
      <Favorites />
      <div className="section">
        <Search />
        <CardList />
      </div>
    </>
  );
}

function Folder() {
  return (
    <>
      <AddLink />
      <div className="section">
        <Search />
        <CardList />
      </div>
    </>
  );
}

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
