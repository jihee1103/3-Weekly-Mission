import { useState, useEffect } from 'react';

import Hero from '../components/Hero/Hero';
import CardList from '../components/CardList/CardList';
import LinkCreator from '../components/Hero/LinkCreator.jsx/LinkCreator';
import Search from '../components/CardList/Search/Search';
import Card from '../components/CardList/Card/Card';
import FolderCollection from '../components/FolderCollection/FolderCollection';

import getFetch from '../utils/getFetch';

const Folder = () => {
  const [folderData, setFolderData] = useState([]);
  const [folderCardData, setFolderCardData] = useState([]);

  const handleOverViewFolderCardData = () => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1/links').then((FolderData) => {
        setFolderCardData(() => {
          return [...FolderData.data];
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 폴더의 전체 버튼이 아닌 버튼을 클릭했을 때 가져올 데이터
  const handleFolderCardData = (id) => {
    try {
      getFetch('bootcamp-api.codeit.kr', `api/users/1/links?folderId=${id}`).then((FolderData) => {
        setFolderCardData(() => {
          return [...FolderData.data];
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 폴더 카드 정보를 가지고 있는 데이터
  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1/links').then((FolderData) => {
        setFolderCardData(() => {
          return [...FolderData.data];
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  // 폴더 버튼들을 가지고 있는 데이터
  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1/folders').then((FolderData) => {
        setFolderData(() => {
          return [...FolderData.data];
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Hero>
        <LinkCreator />
      </Hero>
      <CardList>
        <Search />
        <FolderCollection
          folderData={folderData}
          handleOverViewFolderCardData={handleOverViewFolderCardData}
          handleFolderCardData={handleFolderCardData}
        />
        <Card cardData={folderCardData} />
      </CardList>
    </>
  );
};

export default Folder;
