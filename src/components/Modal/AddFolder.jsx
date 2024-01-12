import styled from 'styled-components';

export default function AddFolder() {
  return (
    <AddFolderWrapper>
      <AddFolderTitle>폴더 추가</AddFolderTitle>
      <AddFolderForm>
        <AddFolderInput placeholder="내용 입력" />
        <AddFolderButton>추가하기</AddFolderButton>
      </AddFolderForm>
    </AddFolderWrapper>
  );
}

const AddFolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
const AddFolderTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #373740;
`;
const AddFolderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const AddFolderInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background: #fff;
  outline: none;
`;
const AddFolderButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
