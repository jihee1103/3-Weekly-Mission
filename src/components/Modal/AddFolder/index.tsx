import styled from "styled-components";
import CloseModalButton from "../CloseModalButton";

const AddFolder = () => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseModalButton />
        <h1>폴더 추가</h1>
        <input placeholder="내용 입력" />
        <button>추가하기</button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AddFolder;

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
    margin-bottom: 20px;
  }

  img {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  input {
    width: 225px;
    height: 45px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 15px;
  }

  button {
    width: 225px;
    height: 38px;
    border: none;
    background-color: #5f75ee;
    color: white;
    border-radius: 8px;
    margin-top: 15px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
`;
