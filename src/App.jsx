import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CardList from './components/CardList/CardList';
import Footer from './components/Footer/Footer';
import ShareDescription from './components/Hero/ShareDescription/ShareDescription';
import LinkCreator from './components/Hero/LinkCreator.jsx/LinkCreator';
import Search from './components/CardList/Search/Search';
import Card from './components/CardList/Card/Card';
import Folder from './components/Folder/Folder';

const App = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);
  const [linkData, setLinkData] = useState([]);
  const [heroLinkData, setHeroLinkData] = useState({});
  const [folderData, setFolderData] = useState([]);
  const [folderCardData, setFolderCardData] = useState([]);

  const getUserData = async () => {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
    if (response.ok) {
      const body = await response.json();
      return body;
    }
    throw new Error('유저 정보를 불러오지 못함');
  };

  useEffect(() => {
    try {
      getUserData().then((data) => {
        setUserData({ ...data });
        setLogin(true);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getCardData = async () => {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
    if (response.ok) {
      const body = await response.json();
      return body.folder;
    }
    throw new Error('카드 정보를 불러오지 못함');
  };

  useEffect(() => {
    try {
      getCardData().then((data) => {
        setLinkData(() => data.links);
        setHeroLinkData(() => data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getFolderData = async () => {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1/folders');
    if (response.ok) {
      const body = await response.json();
      return body.data;
    }
    throw new Error('카드 정보를 불러오지 못함');
  };

  useEffect(() => {
    try {
      getFolderData().then((FolderData) => {
        setFolderData(() => {
          return [...FolderData];
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getFolderCardData = async () => {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/users/1/links');
    if (response.ok) {
      const body = await response.json();
      return body.data;
    }
    throw new Error('카드 정보를 불러오지 못함');
  };

  useEffect(() => {
    try {
      getFolderCardData().then((FolderData) => {
        setFolderCardData(() => {
          return [...FolderData];
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <Header login={login} userData={userData} />
      <Routes>
        <Route
          path="/shared"
          element={
            <>
              <Hero>
                <ShareDescription heroLinkData={heroLinkData} />
              </Hero>
              <CardList linkData={linkData}>
                <Search className="links__search" />
                <Card cardData={linkData} className="links__card" />
              </CardList>
            </>
          }
        />
        <Route
          path="/folder"
          element={
            <>
              <Hero>
                <LinkCreator />
              </Hero>
              <CardList linkData={linkData}>
                <Search className="links__search" />
                <Folder folderData={folderData} />
                <Card cardData={folderCardData} className="links__card" />
              </CardList>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
