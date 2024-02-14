import styled from "styled-components";
import closeIcon from "../_close.svg";
import kakaotalkIcon from "./kakaotalk.svg";
import facebookIcon from "./facebook.svg";
import linkIcon from "./link.svg";

const ShareFolder = () => {
  return (
    <ModalContainer>
      <CloseButton src={closeIcon} alt="닫기 버튼" />
      <h1>폴더 공유</h1>
      <FolderNameSpan>폴더명</FolderNameSpan>
      <ContentsWrapper>
        <div>
          <img src={kakaotalkIcon} alt="카카오톡 공유 버튼" />
          <span>카카오톡</span>
        </div>
        <div>
          <img src={facebookIcon} alt="페이스북 공유 버튼" />
          <span>페이스북</span>
        </div>
        <div>
          <img src={linkIcon} alt="링크 복사 버튼" />
          <span>링크 복사</span>
        </div>
      </ContentsWrapper>
    </ModalContainer>
  );
};

export default ShareFolder;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 300px;
  height: 200px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  position: relative;

  h1 {
    margin: 0;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const FolderNameSpan = styled.span`
  font-size: 14px;
  color: #676767;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 40px;
    height: 40px;
  }
  span {
    font-size: 12px;
  }
`;
