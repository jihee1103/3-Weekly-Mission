import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Hero from '../components/Hero/Hero';
import ShareDescription from '../components/Hero/ShareDescription/ShareDescription';
import Contents from '../components/Contents/Contents';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';

import getFetch from '../utils/getFetch';
import getFormattedCamelCaseData from '../utils/getFormattedCamelCaseData';

const SharedPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line no-unused-vars
  const [sharedUserId, setSharedUserId] = useState(null);
  const [sharedFolderId, setSharedFolderId] = useState(null);
  const [sharedFolderData, setSharedFolderData] = useState([]);
  const [heroProfileData, setHeroProfileData] = useState({});
  const [heroFolderName, setHeroFolderName] = useState('');

  useEffect(() => {
    const userId = searchParams.get('user');
    const folderId = searchParams.get('folder');
    setSharedFolderId(folderId);
    setSharedUserId(userId);
  }, []);

  // shared의 Hero 컴포넌트 데이터
  useEffect(() => {
    try {
      if (sharedFolderId && sharedUserId) {
        getFetch('bootcamp-api.codeit.kr', `api/users/${sharedUserId}/links?folderId=${sharedFolderId}`)
          .then((data) => {
            return data;
          })
          .then((data) => {
            // sample 데이터의 link부분의 key를 카멜 케이스에서 스네이크 케이스로 변환
            const formattedData = getFormattedCamelCaseData(data);
            setSharedFolderData(formattedData);
          });
      }
    } catch (error) {
      console.error(error);
    }
  }, [sharedFolderId, sharedUserId]);

  useEffect(() => {
    try {
      if (sharedFolderId) {
        getFetch('bootcamp-api.codeit.kr', `api/users/${sharedUserId}/folders`)
          .then((res) => {
            return res.data;
          })
          .then((folderCollection) => {
            const foundFolder = folderCollection.find((folder) => {
              return folder.id === Number(sharedFolderId);
            });
            setHeroFolderName(foundFolder.name);
          });
      }
    } catch (err) {
      console.error(err);
    }
  }, [sharedUserId]);

  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', `api/sample/folder`)
        .then((data) => {
          return data.folder;
        })
        .then((folder) => {
          setHeroProfileData(() => {
            return folder;
          });
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <Hero>
        <ShareDescription heroProfileData={heroProfileData} heroFolderName={heroFolderName} />
      </Hero>
      <Contents>
        <Search />
        <CardList cardData={sharedFolderData.data} />
      </Contents>
    </>
  );
};

export default SharedPage;
