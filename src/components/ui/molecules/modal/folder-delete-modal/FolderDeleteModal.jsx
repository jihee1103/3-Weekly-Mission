import ModalCloseBtn from '@components/ui/atoms/button/modal-btn/ModalCloseBtn';
import { StModalActionBtn } from '@components/ui/atoms/button/modal-btn/StModalActionBtn';
import { StModalLabel } from '@components/ui/atoms/label/modal-label/StModalLabel';

import { StModalBackground } from '../StModalBackground';
import { StModalSubText } from '../StModalSubText';
import { StModalWrapper } from '../StModalWrapper';

const FolderDeleteModal = ({ modalText }) => {
  return (
    <StModalBackground>
      <StModalWrapper $rowGap={2.4}>
        <StModalLabel as='div' $rowGap={0.8}>
          {modalText}
          <StModalSubText>폴더명</StModalSubText>
        </StModalLabel>
        <ModalCloseBtn />
        <StModalActionBtn $originalColor='red'>삭제하기</StModalActionBtn>
      </StModalWrapper>
    </StModalBackground>
  );
};

export default FolderDeleteModal;
