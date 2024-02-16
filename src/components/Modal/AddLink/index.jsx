import styled from "styled-components";
import CloseModalButton from "../CloseModalButton";

const AddLink = () => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseModalButton />
        <h1>폴더에 추가</h1>
        <LinkCountSpan>링크 주소</LinkCountSpan>
        <ContentWrapper>
          <div>
            <FolderNameSpan>코딩팁</FolderNameSpan>
            <LinkCountSpan>7개 링크</LinkCountSpan>
          </div>
          <div>
            <FolderNameSpan>채용 사이트</FolderNameSpan>
            <LinkCountSpan>3개 링크</LinkCountSpan>
          </div>
          <div>
            <FolderNameSpan>유용한 글</FolderNameSpan>
            <LinkCountSpan>12개 링크</LinkCountSpan>
          </div>
          <div>
            <FolderNameSpan>나만의 장소</FolderNameSpan>
            <LinkCountSpan>9개 링크</LinkCountSpan>
          </div>
        </ContentWrapper>

        <button>추가하기</button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AddLink;

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
  height: 350px;
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

  z-index: 9999;

  h1 {
    margin: 0;
    font-size: 20px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    gap: 10px;
  }

  button {
    width: 225px;
    height: 38px;
    border: none;
    background-color: #5f75ee;
    color: white;
    border-radius: 8px;
    margin-top: 15px;
    box-sizing: border-box;
  }
`;

const FolderNameSpan = styled.span`
  font-size: 16px;
`;

const LinkCountSpan = styled.span`
  font-size: 14px;
  color: #676767;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 225px;

  margin-top: 20px;

  div {
    margin-bottom: 10px;
  }
`;
