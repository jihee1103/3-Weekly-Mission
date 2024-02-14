import { useState } from 'react';
import styled from 'styled-components';

const ModalInput = ({ placeHolder, modal }) => {
  const [inputValue, setInputValue] = useState(modal.data.folderName);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <ModalInputWrapper>
      <input type="text" placeHolder={placeHolder} value={inputValue} onChange={onChange} />
    </ModalInputWrapper>
  );
};

const ModalInputWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  width: 280px;
  padding: 18px 15px;

  &:focus-within {
    border-radius: 8px;
    border: 1px solid #6d6afe;
  }

  &input {
    color: #373740;
    font-family: Pretendard;
    font-size: 16px;
    line-height: 24px; /* 150% */
  }
`;

export default ModalInput;
