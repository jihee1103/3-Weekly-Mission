import ModalTitle from './ModalContent/ModalTitle';
import ModalInput from './ModalContent/ModalInput';
import ModalCtaButton from './ModalContent/ModalCtaButton';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalInputContainer from './ModalContent/ModalInputContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';

const CreateFolder = ({ modal, setModal }) => {
  const ModalCtaButtonBgColor = 'linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)';

  return (
    <ModalContentWrapper>
      <ModalTitle text="폴더 추가" />
      <ModalInputContainer>
        <ModalInput placeHolder="내용 입력" modal={modal} />
        <ModalCtaButton text="추가하기" bgColor={ModalCtaButtonBgColor} />
      </ModalInputContainer>
      <ModalCloseButton modal={modal} setModal={setModal} />
    </ModalContentWrapper>
  );
};

export default CreateFolder;
