import styled from "styled-components";
import closeIcon from "../_close.svg";

const DeleteFolder = () => {
  return (
    <ModalContainer>
      <img src={closeIcon} alt="닫기 버튼" />
      <h1>폴더 삭제</h1>
      <span>폴더명</span>
      <button>삭제하기</button>
    </ModalContainer>
  );
};

export default DeleteFolder;

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

  span {
    font-size: 14px;
    color: #676767;
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
    background-color: #ff6b6b;
    color: white;
    border-radius: 8px;
    margin-top: 15px;
    box-sizing: border-box;
  }
`;
