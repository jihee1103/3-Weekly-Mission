import { useEffect } from 'react';
import styled from 'styled-components';

import ModalTitle from './ModalContent/ModalTitle';
import ModalContentWrapper from './ModalContent/ModalContentWrapper';
import ModalTitleContainer from './ModalContent/ModalTitleContainer';
import ModalCloseButton from './ModalContent/ModalCloseButton';

import modalKakao from '../../assets/images/modal_kakao.svg';
import modalFacebook from '../../assets/images/modal_facebook.svg';
import modalLink from '../../assets/images/modal_link.svg';

const ShareFolder = ({ modal, setModal }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleShareToKakao = () => {
    // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('e5f079e205ef1816dd9189a0388e190b'); // 카카오에서 제공받은 javascript key를 넣어줌
      }

      kakao.Link.sendDefault({
        // 링크 공유 중 여러가지 타입
        objectType: 'feed',
        content: {
          title: modal.data.folderName,
          description: modal.data.sharingUrl,
          imageUrl: '이미지 url',
          link: {
            mobileWebUrl: modal.data.sharingUrl,
            webUrl: modal.data.sharingUrl,
          },
        },
        buttons: [
          {
            title: modal.data.folderName,
            link: {
              mobileWebUrl: modal.data.sharingUrl,
              webUrl: modal.data.sharingUrl,
            },
          },
        ],
      });
    }
  };

  const handleShareToFacebook = () => {
    console.log(modal.data.sharingUrl);
    const sharedLink = encodeURIComponent(modal.data.sharingUrl);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const handleCopySharingUrlToClipBoard = async () => {
    try {
      console.log(modal.data.sharingUrl);
      await navigator.clipboard.writeText(modal.data.sharingUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ModalContentWrapper>
      <ModalTitleContainer>
        <ModalTitle text="폴더 공유" detailText={modal.data.folderName} />
      </ModalTitleContainer>
      <ShareButtonWrapper>
        <ShareButton type="button" onClick={handleShareToKakao}>
          <ShareButtonImgWrapper bgColor="#FEE500">
            <img src={modalKakao} alt="모달 카카오 버튼" />
          </ShareButtonImgWrapper>
          <span>카카오톡</span>
        </ShareButton>
        <ShareButton type="button" onClick={handleShareToFacebook}>
          <ShareButtonImgWrapper bgColor="#1877F2">
            <img src={modalFacebook} alt="모달 페이스북 버튼" />
          </ShareButtonImgWrapper>
          <span>페이스북</span>
        </ShareButton>
        <ShareButton type="button" onClick={handleCopySharingUrlToClipBoard}>
          <ShareButtonImgWrapper bgColor="rgba(157, 157, 157, 0.04)">
            <img src={modalLink} alt="모달 링크 버튼" />
          </ShareButtonImgWrapper>
          <span>링크 복사</span>
        </ShareButton>
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
