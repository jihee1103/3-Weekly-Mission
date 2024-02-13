import styled from 'styled-components';

import Hero from '../components/Hero/Hero';
import Contents from '../components/Contents/Contents';
import LinkCreator from '../components/Hero/LinkCreator.tsx/LinkCreator';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';
import FolderCollection from '../components/Contents/FolderCollection/FolderCollection';

import Modal from '../components/Modal/Modal';
import { useFolder, useFolderPageLogin, useModal } from './FolderPage.hook';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const FolderPage = () => {
  const { modal, setModal, showModal, closeModal } = useModal();
  const { folderData, folderCardData, handleOverviewCardButtonClick, handleFilteredCardButtonClick } = useFolder();
  const { login, userData } = useFolderPageLogin();

  return (
    <FolderPageWrapper>
      <Header login={login} userData={userData} />z
      <Hero>
        <LinkCreator onUpdateButtonClick={showModal} />
      </Hero>
      <Contents>
        <Search />
        <FolderCollection
          onButtonClick={showModal}
          userData={userData}
          folderData={folderData}
          onOverviewCardButtonClick={handleOverviewCardButtonClick}
          onFilteredCardButtonClick={handleFilteredCardButtonClick}
        />
        <button type="button" onClick={() => console.log(folderCardData)}>
          버튼
        </button>
        <CardList cardListData={folderCardData} onDeleteButtonClick={showModal} />
      </Contents>
      <Footer />
      {modal.name ? <Modal modal={modal} setModal={setModal} onCloseModalButtonClick={closeModal} /> : null}
    </FolderPageWrapper>
  );
};

const FolderPageWrapper = styled.div`
  position: relative;
`;

export default FolderPage;
