import styled from 'styled-components';

export default function ChangeFolderName() {
  return (
    <EditFolderWrapper>
      <EditFolderTitle>폴더 이름 변경</EditFolderTitle>
      <EditFolderForm>
        <EditFolderInput placeholder="유용한 팁" />
        <EditFolderButton>변경하기</EditFolderButton>
      </EditFolderForm>
    </EditFolderWrapper>
  );
}

const EditFolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
const EditFolderTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #373740;
`;
const EditFolderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const EditFolderInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background: #fff;
  outline: none;
  &::placeholder {
    color: #9fa6b2;
  }
`;
const EditFolderButton = styled.button`
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
