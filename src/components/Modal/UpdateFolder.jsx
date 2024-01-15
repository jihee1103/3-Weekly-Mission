import ModalTitle from './ModalContent/ModalTitle';
import ModalCtaButton from './ModalContent/ModalCtaButton';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalTitleContainer from './ModalContent/ModalTitleContainer';
import ModalInputContainer from './ModalContent/ModalInputContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';
import ModalUpdateFolderCollection from './ModalContent/ModalUpdateFolderCollection';

const UpdateFolder = ({ modal, setModal }) => {
  const ModalCtaButtonBgColor = 'linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)';

  return (
    <ModalContentWrapper>
      <ModalTitleContainer>
        <ModalTitle text="폴더에 추가" detailText="링크 주소" />
      </ModalTitleContainer>
      <ModalUpdateFolderCollection />
      <ModalInputContainer>
        <ModalCtaButton text="추가하기" bgColor={ModalCtaButtonBgColor} />
      </ModalInputContainer>
      <ModalCloseButton modal={modal} setModal={setModal} />
    </ModalContentWrapper>
  );
};

export default UpdateFolder;
