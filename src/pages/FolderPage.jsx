import { useState, useEffect } from 'react';

import Hero from '../components/Hero/Hero';
import Contents from '../components/Contents/Contents';
import LinkCreator from '../components/Hero/LinkCreator.jsx/LinkCreator';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';
import FolderCollection from '../components/Contents/FolderCollection/FolderCollection';

import getFetch from '../utils/getFetch';
import getFormattedCamelCaseData from '../utils/getFormattedCamelCaseData';

const FolderPage = ({ userData }) => {
  const [folderData, setFolderData] = useState([]);
  const [folderCardData, setFolderCardData] = useState([]);

  // 폴더의 전체 버튼을 클릭했을 때 가져올 데이터
  const handleOverViewFolderCardData = () => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1/links').then((cardData) => {
        setFolderCardData(() => {
          return getFormattedCamelCaseData(cardData.data);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 폴더의 전체 버튼이 아닌 버튼을 클릭했을 때 가져올 데이터
  const handleFolderCardData = (id) => {
    try {
      getFetch('bootcamp-api.codeit.kr', `api/users/1/links?folderId=${id}`).then((cardData) => {
        setFolderCardData(() => {
          return getFormattedCamelCaseData(cardData.data);
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
          return getFormattedCamelCaseData(FolderData.data);
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
          return getFormattedCamelCaseData(FolderData.data);
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
      <Contents>
        <Search />
        <FolderCollection
          userData={userData}
          folderData={folderData}
          handleOverViewFolderCardData={handleOverViewFolderCardData}
          handleFolderCardData={handleFolderCardData}
        />
        <CardList cardData={folderCardData} />
      </Contents>
    </>
  );
};

export default FolderPage;
