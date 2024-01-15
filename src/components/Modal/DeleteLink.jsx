import ModalTitle from './ModalContent/ModalTitle';
import ModalCtaButton from './ModalContent/ModalCtaButton';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalTitleContainer from './ModalContent/ModalTitleContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';

const DeleteLink = ({ modal, setModal }) => {
  const ModalCtaButtonBgColor = '#FF5B56';

  return (
    <ModalContentWrapper>
      <ModalTitleContainer>
        <ModalTitle text="링크 삭제" detailText={modal.data.url} />
        <ModalCtaButton text="삭제하기" bgColor={ModalCtaButtonBgColor} />
      </ModalTitleContainer>
      <ModalCloseButton modal={modal} setModal={setModal} />
    </ModalContentWrapper>
  );
};

export default DeleteLink;
