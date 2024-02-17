import styled from "styled-components";
import kakaotalkIcon from "./kakaotalk.svg";
import facebookIcon from "./facebook.svg";
import linkIcon from "./link.svg";
import CloseModalButton from "../CloseModalButton";

const ShareFolder = () => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseModalButton />
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
    </ModalBackground>
  );
};

export default ShareFolder;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const ModalContainer = styled.div`
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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
