import ModalCloseBtn from '@components/ui/atoms/button/modal-btn/ModalCloseBtn';
import { StModalActionBtn } from '@components/ui/atoms/button/modal-btn/StModalActionBtn';
import { StModalLabel } from '@components/ui/atoms/label/modal-label/StModalLabel';

import { StModalBackground } from '../StModalBackground';
import { StModalInput } from '../StModalInput';
import { StModalWrapper } from '../StModalWrapper';

const FolderEditModal = ({ modalText }) => {
  return (
    <StModalBackground>
      <StModalWrapper $rowGap={1.5}>
        <StModalLabel htmlFor='folder-name-change' $rowGap={2.4}>
          {/* 접근성 - 시각 장애인 분들 위함 ---> input은 무조건 라벨 태그 안에 있어야 한다고 권장함. - W3C */}
          {modalText}
          <StModalInput placeholder='내용 입력' id='folder-name-change' />
        </StModalLabel>
        <ModalCloseBtn />
        <StModalActionBtn>변경하기</StModalActionBtn>
      </StModalWrapper>
    </StModalBackground>
  );
};

export default FolderEditModal;
