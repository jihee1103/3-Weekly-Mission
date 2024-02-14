import ModalTitle from './ModalContent/ModalTitle';
import ModalInput from './ModalContent/ModalInput';
import ModalCtaButton from './ModalContent/ModalCtaButton';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalTitleContainer from './ModalContent/ModalTitleContainer';
import ModalInputContainer from './ModalContent/ModalInputContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';

const ChangeFolderName = ({ modal, onCloseModalButtonClick }) => {
  const ModalCtaButtonBgColor = 'linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)';

  return (
    <ModalContentWrapper>
      <ModalTitleContainer>
        <ModalTitle text="폴더 이름 변경하기" />
      </ModalTitleContainer>
      <ModalInputContainer>
        <ModalInput modal={modal} />
        <ModalCtaButton text="변경하기" bgColor={ModalCtaButtonBgColor} />
      </ModalInputContainer>
      <ModalCloseButton modal={modal} onCloseModalButtonClick={onCloseModalButtonClick} />
    </ModalContentWrapper>
  );
};

export default ChangeFolderName;
