import ModalTitle from './ModalContent/ModalTitle';
import ModalCtaButton from './ModalContent/ModalCtaButton';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalTitleContainer from './ModalContent/ModalTitleContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';

interface DeleteFolderProps {
  modal: { name: string; data: { folderName: string } };
  onCloseModalButtonClick: () => void;
}

const DeleteFolder = ({ modal, onCloseModalButtonClick }: DeleteFolderProps) => {
  const ModalCtaButtonBgColor = '#FF5B56';

  return (
    <ModalContentWrapper>
      <ModalTitleContainer>
        <ModalTitle text="폴더 삭제" detailText={modal.data.folderName} />
        <ModalCtaButton text="삭제하기" bgColor={ModalCtaButtonBgColor} />
      </ModalTitleContainer>
      <ModalCloseButton onCloseModalButtonClick={onCloseModalButtonClick} />
    </ModalContentWrapper>
  );
};

export default DeleteFolder;
