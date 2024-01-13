import styled from 'styled-components';
import AddFolder from './AddFolder';
import closeButton from '../../asset/close.svg';
import ChangeFolderName from './ChangeFolderName';
import DeleteFolder from './DeleteFolder';
import ShareFolder from './ShareFolder';
import AddLinkToFolder from './AddLinkToFolder';
import DeleteLink from './DeleteLink';

export default function Modal({
  toggleModalClick,
  modalName,
  folderList,
  addLinkUrl,
  folderName,
  selectedLinkUrl,
}) {
  const handleCloseButtonClick = () => {
    toggleModalClick();
  };
  const updateModal = () => {
    if (modalName === 'addFolder') {
      return <AddFolder />;
    }
    if (modalName === 'changeFolderName') {
      return <ChangeFolderName folderName={folderName} />;
    }
    if (modalName === 'deleteFolder') {
      return <DeleteFolder folderName={folderName} />;
    }
    if (modalName === 'deleteLink') {
      return <DeleteLink selectedLinkUrl={selectedLinkUrl} />;
    }
    if (modalName === 'shareFolder') {
      return <ShareFolder folderName={folderName} />;
    }
    if (modalName === 'addLinkButton') {
      return (
        <AddLinkToFolder
          folderList={folderList}
          addLinkUrl={addLinkUrl}
          selectedLinkUrl={selectedLinkUrl}
        />
      );
    }
    return null;
  };
  return (
    <ModalWrapper>
      <ModalContainer>
        <CloseButton src={closeButton} onClick={handleCloseButtonClick} />
        {updateModal()}
      </ModalContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  z-index: 3;
`;
const ModalContainer = styled.div`
  position: relative;
  display: flex;
  padding: 32px 40px;
  width: 360px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
`;
const CloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
