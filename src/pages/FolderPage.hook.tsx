import { useEffect, useState } from 'react';
import { DEFALUT_MODAL_VALUE } from '../Constants/Constants';
import getFetch from '../utils/getFetch';
import getFormattedCamelCaseData from '../utils/getFormattedCamelCaseData';

interface ModalType {
  name: string;
  data: { url: string };
}

// Modal을 사용하기 위한 hook
export const useModal = () => {
  const [modal, setModal] = useState(DEFALUT_MODAL_VALUE);

  const showModal = (modalValue: ModalType) => {
    setModal(modalValue);
  };

  const closeModal = () => {
    setModal(DEFALUT_MODAL_VALUE);
  };

  return { modal, showModal, closeModal, setModal };
};

// 폴더들을 가지고 있는 데이터
export const useFolder = () => {
  const [folderCardData, setFolderCardData] = useState([]);
  const [folderData, setFolderData] = useState([]);

  // 페이지 로드시 폴더 데이터 가지오기
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

  // 폴더의 전체 버튼을 클릭했을 때 가져올 데이터
  const handleOverviewCardButtonClick = () => {
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
  const handleFilteredCardButtonClick = (id: number) => {
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
  return { folderData, folderCardData, handleOverviewCardButtonClick, handleFilteredCardButtonClick };
};

// 폴더 페이지의 로그인 로직과 유저 데이터를 가져오는 훅
export const useFolderPageLogin = () => {
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

  return { login, userData };
};
