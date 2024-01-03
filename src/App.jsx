import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Folder from './components/Folder/Folder';
import CardList from './components/CardList/CardList';
import Footer from './components/Footer/Footer';

const App = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [linkData, setLinkData] = useState({});

  const loadUserData = async () => {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
    if (response.ok) {
      const body = await response.json();
      return body;
    }
    throw new Error('유저 정보를 불러오지 못함');
  };

  useEffect(() => {
    try {
      loadUserData().then((data) => {
        setUserData({ ...data });
        setLogin(true);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const loadCardData = async () => {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
    if (response.ok) {
      const body = await response.json();
      return body;
    }
    throw new Error('카드 정보를 불러오지 못함');
  };

  useEffect(() => {
    try {
      loadCardData().then((data) => {
        setLinkData(() => data.folder);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <Header login={login} userData={userData} />
      <Folder linkData={linkData} />
      <CardList linkData={linkData} />
      <Footer />
    </div>
  );
};

export default App;
