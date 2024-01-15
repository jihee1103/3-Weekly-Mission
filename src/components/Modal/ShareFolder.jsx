import styled from 'styled-components';
import ModalTitle from './ModalContent/ModalTitle';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalTitleContainer from './ModalContent/ModalTitleContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';

import modalKakao from '../../assets/images/modal_kakao.svg';
import modalFacebook from '../../assets/images/modal_facebook.svg';
import modalLink from '../../assets/images/modal_link.svg';

const shareButtonData = [
  { name: '카카오톡', img: modalKakao, alt: '모달 카카오 버튼', bgColor: '#FEE500' },
  { name: '페이스북', img: modalFacebook, alt: '모달 페이스북 버튼', bgColor: '#1877F2' },
  { name: '링크 복사', img: modalLink, alt: '모달 링크 버튼', bgColor: 'rgba(157, 157, 157, 0.04)' },
];

const ShareFolder = ({ modal, setModal }) => {
  return (
    <ModalContentWrapper>
      <ModalTitleContainer>
        <ModalTitle text="폴더 공유" detailText="폴더명" />
      </ModalTitleContainer>
      <ShareButtonWrapper>
        {shareButtonData.map((item) => {
          return (
            <ShareButton type="button">
              <ShareButtonImgWrapper bgColor={item.bgColor}>
                <img src={item.img} alt={item.alt} />
              </ShareButtonImgWrapper>
              <span>{item.name}</span>
            </ShareButton>
          );
        })}
      </ShareButtonWrapper>
      <ModalCloseButton modal={modal} setModal={setModal} />
    </ModalContentWrapper>
  );
};

const ShareButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 32px;
`;

const ShareButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    color: var(--Linkbrary-gray100, #373740);
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px; /* 115.385% */
  }
`;

const ShareButtonImgWrapper = styled.div`
  box-sizing: border-box;
  width: 42px;
  height: 42px;
  padding: 12px;
  border-radius: 37.333px;
  background: ${(props) => props.bgColor};

  img {
    width: 18px;
    height: 18px;
  }
`;

export default ShareFolder;
