import styled from 'styled-components';

import Hero from '../components/Hero/Hero';
import Contents from '../components/Contents/Contents';
import LinkCreator from '../components/Hero/LinkCreator/LinkCreator';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';
import FolderCollection from '../components/Contents/FolderCollection/FolderCollection';

import Modal from '../components/Modal/Modal';
import { useFolder, useFolderPageLogin, useModal, useInput } from './FolderPage.hook';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const FolderPage = () => {
  const { modal, setModal, showModal, closeModal } = useModal();
  const {
    folderData,
    folderCardData,
    setFolderCardData,
    handleOverviewCardButtonClick,
    handleFilteredCardButtonClick,
  } = useFolder();
  const { login, userData } = useFolderPageLogin();
  const { inputValue, handleInputChange, resetInputValue } = useInput(folderCardData, setFolderCardData);

  return (
    <FolderPageWrapper>
      <Header login={login} userData={userData} />
      <Hero>
        <LinkCreator onUpdateButtonClick={showModal} />
      </Hero>
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
      <Footer />
      {modal.type ? <Modal modal={modal} setModal={setModal} onCloseModalButtonClick={closeModal} /> : null}
    </FolderPageWrapper>
  );
};

const FolderPageWrapper = styled.div`
  position: relative;
`;

export default FolderPage;
