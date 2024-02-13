import ModalTitle from './ModalContent/ModalTitle';
import ModalCtaButton from './ModalContent/ModalCtaButton';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalTitleContainer from './ModalContent/ModalTitleContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';

const DeleteFolder = ({ modal, onCloseModalButtonClick }) => {
  const ModalCtaButtonBgColor = '#FF5B56';

  return (
    <ModalContentWrapper>
      <ModalTitleContainer>
        <ModalTitle text="폴더 삭제" detailText={modal.folderName} />
        <ModalCtaButton text="삭제하기" bgColor={ModalCtaButtonBgColor} />
      </ModalTitleContainer>
      <ModalCloseButton onCloseModalButtonClick={onCloseModalButtonClick} />
    </ModalContentWrapper>
  );
};

export default DeleteFolder;
