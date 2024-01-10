import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './reset.css';
import './assets/pretendard.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage';
import GlobalStyle from './GlobalStyle';
import Folder from './pages/Folder';
import Shared from './pages/Shared';

import getFetch from './utils/getFetch';

const App = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);

  // Header의 유저 프로필 데이터
  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1').then((user) => {
        setUserData({ ...user.data[0] });
        setLogin(true);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header login={login} userData={userData} />
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
