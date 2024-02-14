import styled from "styled-components";
import closeIcon from "../_close.svg";

const AddFolder = () => {
  return (
    <ModalContainer>
      <img src={closeIcon} alt="닫기 버튼" />
      <h1>폴더 추가</h1>
      <input placeholder="내용 입력" />
      <button>추가하기</button>
    </ModalContainer>
  );
};

export default AddFolder;

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
