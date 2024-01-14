import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useSNSShare } from '@hooks/useSNSShare';

import Modal from '..';
import { StModalSubText } from '../StModalSubText';

/**
 * @description 폴더 공유 모달
 */
const FolderShareModal = ({ modalName = '폴더 공유', folderName, closeModal }) => {
  const [currentHref, setCurrentHrefAfterMound] = useState('');

  useEffect(() => {
    setCurrentHrefAfterMound(window.location.href);
  }, []);

  // ① encodeURI(): 인터넷 주소에서 사용하는 :, ;, /, =, ?, & 등을 제외하고 인코딩하는 함수
  // ② encodeURIComponent(): 모든 문자를 인코딩하는 함수, 전체 URI를 구성하는 부분 인코딩에 적합, 매개변수를 인코딩 하려는 경우
  // ③ 인코딩: 데이터를 다른 포맷(형식)으로 변환. 사용할 수 없는 문자를 사용할 수 있는 특수 문자 조합으로 표현

  /**
   * @see {@link https://become-a-developer.tistory.com/63} - Parameter 'href' should represent a valid URL 에러 뜰 시.  URL을 읽어들일 수 없음 에러 뜰 시
   */
  // const shareToFacebook = () => {
  //   const sharedLink = encodeURIComponent(window.location.href);
  //   window.open(`https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  // };

  const { shareToFacebook, shareToKakaotalk, copyFolderUrl } = useSNSShare({ title: 'Linkbrary', url: currentHref });

  const mockArray = [
    { iconName: 'kakao', text: '카카오톡', onClickHandler: shareToKakaotalk },
    { iconName: 'facebook', text: '페이스북', onClickHandler: shareToFacebook },
    { iconName: 'clipboard', text: '링크 복사', onClickHandler: copyFolderUrl },
  ];

  return (
    <Modal.StModalBackground>
      <Modal.StModalWrapper $rowGap={2.4}>
        <Modal.StModalLabel as='div' $rowGap={0.8}>
          {modalName}
          <StModalSubText>{folderName}</StModalSubText>
        </Modal.StModalLabel>
        <StSNSListWrapper>
          {mockArray.map(({ iconName, text, onClickHandler }) => {
            return (
              <StSNSBox key={text} onClick={onClickHandler}>
                <img alt={`${text} 아이콘`} src={`/images/folder/modal-${iconName}-icon.svg`} />
                <span>{text}</span>
              </StSNSBox>
            );
          })}
        </StSNSListWrapper>
        <Modal.ModalCloseBtn closeModal={closeModal} />
      </Modal.StModalWrapper>
    </Modal.StModalBackground>
  );
};

export default FolderShareModal;

const StSNSListWrapper = styled.div`
  display: flex;
  column-gap: 3.2rem;
`;

const StSNSBox = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 1rem;

  color: var(--Linkbrary-gray80, #444);
  text-align: center;
  font-family: Inter;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem; /* 115.385% */

  & > img {
    width: 4.2rem;
    height: 4.2rem;
  }
`;
