import styled from "styled-components";
import closeIcon from "../_close.svg";

const AddLink = () => {
  return (
    <ModalContainer>
      <img src={closeIcon} alt="닫기 버튼" />
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
  );
};

export default AddLink;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 300px;
  height: 350px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  position: relative;

  h1 {
    margin: 0;
    font-size: 20px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    gap: 10px;
  }

  img {
    position: absolute;
    top: 15px;
    right: 15px;
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
