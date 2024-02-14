import styled from 'styled-components';

import Contents from '../components/Contents/Contents';
import LinkCreator from '../components/Hero/LinkCreator/LinkCreator';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';
import FolderCollection from '../components/Contents/FolderCollection/FolderCollection';

import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import { useFolder, useFolderPageLogin, useModal, useScrollingSearchBar } from './FolderPage.hook';
import { useSearchBar } from '../hooks/useSearchBar';

const FolderPage = () => {
  const { modal, setModal, showModal, closeModal } = useModal();
  const {
    folderData,
    folderCardData,
    originalFolderCardData,
    setFolderCardData,
    handleOverviewCardButtonClick,
    handleFilteredCardButtonClick,
  } = useFolder();
  const { login, userData } = useFolderPageLogin();
  const { inputValue, handleInputChange, resetInputValue } = useSearchBar(originalFolderCardData, setFolderCardData);
  const { linkCreactorRefs, footerDom } = useScrollingSearchBar();

  return (
    <FolderPageWrapper>
      <Header login={login} userData={userData} />
      <LinkCreator onUpdateButtonClick={showModal} ref={linkCreactorRefs} />
      <Contents>
        <Search inputValue={inputValue} onInputChange={handleInputChange} resetInputValue={resetInputValue} />
        <FolderCollection
          onButtonClick={showModal}
          userData={userData}
          folderData={folderData}
          onOverviewCardButtonClick={handleOverviewCardButtonClick}
          onFilteredCardButtonClick={handleFilteredCardButtonClick}
        />
        <CardList cardData={folderCardData} onDeleteButtonClick={showModal} />
      </Contents>
      <Footer ref={footerDom} />
      {modal.type ? <Modal modal={modal} setModal={setModal} onCloseModalButtonClick={closeModal} /> : null}
    </FolderPageWrapper>
  );
};

const FolderPageWrapper = styled.div`
  position: relative;
`;

export default FolderPage;
