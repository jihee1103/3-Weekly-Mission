import styled from 'styled-components';

import CreateFolder from './CreateFolder';
import ShareFolder from './ShareFolder';
import ChangeFolderName from './ChangeFolderName';
import DeleteFolder from './DeleteFolder';
import UpdateFolder from './UpdateFolder';
import DeleteLink from './DeleteLink';

const Modal = ({ modal, onCloseModalButtonClick }) => {
  switch (modal.name) {
    case 'CreateFolder': {
      return (
        <ModalWrapper>
          <CreateFolder modal={modal} onCloseModalButtonClick={onCloseModalButtonClick} />
        </ModalWrapper>
      );
    }
    case 'ShareFolder': {
      return (
        <ModalWrapper>
          <ShareFolder modal={modal} onCloseModalButtonClick={onCloseModalButtonClick} />
        </ModalWrapper>
      );
    }
    case 'ChangeFolderName': {
      return (
        <ModalWrapper>
          <ChangeFolderName modal={modal} onCloseModalButtonClick={onCloseModalButtonClick} />
        </ModalWrapper>
      );
    }
    case 'DeleteFolder': {
      return (
        <ModalWrapper>
          <DeleteFolder modal={modal} onCloseModalButtonClick={onCloseModalButtonClick} />
        </ModalWrapper>
      );
    }
    case 'UpdateFolder': {
      return (
        <ModalWrapper>
          <UpdateFolder modal={modal} onCloseModalButtonClick={onCloseModalButtonClick} />
        </ModalWrapper>
      );
    }
    case 'DeleteLink': {
      return (
        <ModalWrapper>
          <DeleteLink modal={modal} onCloseModalButtonClick={onCloseModalButtonClick} />
        </ModalWrapper>
      );
    }
    default: {
      break;
    }
  }
  return console.log(`${modal} 모달창 생성!`);
};

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 0;
`;

export default Modal;
